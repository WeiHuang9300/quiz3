window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    //creat a scene and find a scena
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
//copy latitude and longitude
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '125 225 25');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.8 0.5 1.5');
//Add model on coordinates,and the size of the model
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}