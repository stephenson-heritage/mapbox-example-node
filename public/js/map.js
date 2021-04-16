mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbnNvbi1oZXJpdGFnZSIsImEiOiJjanZ4ejlxazMwYWRlNDhrOHJxN2hlZGl5In0.GvwpDRkNHQKPfS8S2SA4Dg';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/stephenson-heritage/cknkdyl560gbm17m916iycuy2', // style URL
    center: [-75.83239034252583, 45.498142557294706], // starting position [lng, lat]
    zoom: 12 // starting zoom
});


window.onload = () => {
    let tracker;
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((p) => {
            console.log(p.coords);

            map.setCenter({ lon: p.coords.longitude, lat: p.coords.latitude });
        });

        // tracker = navigator.geolocation.watchPosition((p) => {
        //     console.log(p.coords);
        //     map.setCenter({ lon: p.coords.longitude, lat: p.coords.latitude });
        // });

    } else {
        // geolocation not available
    };

    //navigator.geolocation.clearWatch(tracker);

};