// function to process user input in form
function sendMail(contactForm) {
    // Get the reCAPTCHA response token
    const recaptchaResponse = grecaptcha.getResponse();
    console.log("ReCAPTCHA Token:", recaptchaResponse);


    // Check if the reCAPTCHA is completed
    if (!recaptchaResponse) {
        alert("Please confirm you are not a robot.");
        return false; // Prevent form submission
    }

    // Send email with reCAPTCHA token included
    emailjs.send("service_ffyg3bn", "template_mbn3ioe", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value,
        "reply_to": contactForm.emailaddress.value,
        "g-recaptcha-response": recaptchaResponse, // Include the reCAPTCHA token
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your email has been sent successfully!");
        },
        function(error) {
            console.error("FAILED", error);
            alert("Failed to send your email. Please try again.");
        }
    );

    // Reset the reCAPTCHA after submission
    grecaptcha.reset();

    return false; // Prevent page reload
}