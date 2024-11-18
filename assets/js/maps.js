// function to render map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 40.785091, lng: -73.968285 },
    });

    // creates label for markers
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    // creates markers
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            map: map,
            label: {
                text: labels[i % labels.length],
                color: "black", // Ensure label is visible
                fontSize: "14px",
                fontWeight: "bold",
            },
        });
    });

    // Uncomment this to use clustering again:
    new markerClusterer.MarkerClusterer({
        map,
        markers,
    });
}
