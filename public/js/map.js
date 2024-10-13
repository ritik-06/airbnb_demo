mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:"mapbox://styles/mapbox/satellite-streets-v12",
        center: [ 77.208773, 28.613927 ], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
});

//console.log(coordinates);

new mapboxgl.Marker()
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25}).setHtml(
            `<h4>${listing.title}</h4><p>Extract location will be provided after booking</p>`
        )
    )
    .addTo(map);
