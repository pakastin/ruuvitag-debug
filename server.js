const ruuvi = require('node-ruuvitag');

ruuvi.on('found', tag => {
  tag.on('updated', data => {
    const { id, address, addressType, connectable } = tag;

    console.log({
      id,
      address,
      addressType,
      connectable,
      ...data
    });
  });
});
