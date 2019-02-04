module.exports.dataToRandom = (data) => {
  randomizedObject = {};
  for(const prop in data) {
    if (!data[prop]) continue;
    if (Array.isArray(data[prop])) {
      let items = [...data[prop]];
      randomizedObject[prop] = items[Math.floor(Math.random() * items.length)]; 
    } else if (typeof data[prop] === 'object') {
      let items = Object.values(data[prop]);
      randomizedObject[prop] = items[Math.floor(Math.random() * items.length)];
    } else {
      randomizedObject[prop] = `${data[prop]} ${Date.now()}`
    }
  }
  return randomizedObject;
};
