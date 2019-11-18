function indexJS(){}

function apriMappa(){
    var Map = L.map('mappa').setView(getCurrentLocat(), 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery  <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoicHJvZ2V0dGFudGlzdGkiLCJhIjoiY2syMGticWdtMTExOTNwdWc3ZW9pOW5zMiJ9.qioBe4OljXB2XwJg9vS3Kw'
        }).addTo(Map);
}

function getCurrentLocat(){
        var currPosition;
        if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position)
                {
                   currPosition = new L.LatLng(position.coords.latitude, position.coords.longitude);
                })
                console.log(currPosition);
        return currPosition;
        }
}
