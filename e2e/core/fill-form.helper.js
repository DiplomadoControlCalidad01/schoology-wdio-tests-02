module.exports = (context) => (object, sufix = 'TextField') => {
    if (typeof object !== 'object') throw new Error('Invalid JSON object provided for fill form helper');
    for (let key in object) {
        if (context[`${key}${sufix}`]) {
            if (sufix === 'TextField') {
                context[`${key}${sufix}`].setValue(object[key]);
            } else if (sufix === 'SelectField') {
                context[`${key}${sufix}`].selectByValue(object[key]);
            }
        }
    }
};
