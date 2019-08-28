const ruuvi = require('@pakastin/node-ruuvitag');

ruuvi.on('found', tag => {
  let previous;

  tag.on('updated', data => {
    const { id } = tag;

    const deltaX = previous ? (previous.accelerationX - data.accelerationX) : 0;
    const deltaY = previous ? (previous.accelerationY - data.accelerationY) : 0;
    const deltaZ = previous ? (previous.accelerationZ - data.accelerationZ) : 0;

    const movement = previous ? (Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2) + Math.pow(deltaZ, 2)) / 1000) : 0;

    previous = data;

    console.log({
      id,
      movement,
      ...data
    });
  });
});
