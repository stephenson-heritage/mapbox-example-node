mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbnNvbi1oZXJpdGFnZSIsImEiOiJjanZ4ejlxazMwYWRlNDhrOHJxN2hlZGl5In0.GvwpDRkNHQKPfS8S2SA4Dg';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/stephenson-heritage/cknkdyl560gbm17m916iycuy2', // style URL
    center: [-75.83239034252583, 45.498142557294706], // starting position [lng, lat]
    zoom: 12 // starting zoom
});


window.onload = async () => {
    let location = false;
    let tracker;
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((p) => {
            console.log(p.coords);
            location = true;
            map.setCenter({ lon: p.coords.longitude, lat: p.coords.latitude });
        });
    }

    if (!location) {
        // geolocation not available
        if ('geolocation' in navigator) {
            let allowGeo = await navigator.permissions.query({ name: 'geolocation' });
            if (allowGeo.state == "prompt") {
                allowGeo.onchange = (e) => {
                    if (e.target.state == "granted") {

                        //console.log(e);
                        navigator.geolocation.getCurrentPosition((p) => {
                            console.log(p.coords);
                            location = true;
                            map.setCenter({ lon: p.coords.longitude, lat: p.coords.latitude });
                        });

                    }
                };
            }
        }
        getServerGeo();
    };
};

let getServerGeo = async function () {
    var loc = await fetch("/geo");
    var jData = await loc.json();

    console.log(jData);
    map.setCenter({ lon: jData.longitude, lat: jData.latitude });
}