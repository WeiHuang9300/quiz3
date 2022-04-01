window.onload = () => {
  render();
};

const models = [
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.8 0.5 1.5',
    rotation: '125 225 25'
    //scale, and rotation, in code
    //also can add some modle here
  },
];

let modelIndex = 0;
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

function render() {
  const scene = document.querySelector('a-scene');

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
// object:Create a scene at the current coordinates
    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
//a scene include a entity,a entity include  latitude and longtitude,pgeolocation use for positioning
    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}
