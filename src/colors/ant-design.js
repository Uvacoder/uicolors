const colors = require('@ant-design/colors');
const returnImportantColors = require('../utils/returnImportantColors');

let realColors = {};

for(let key in colors) {
    if(typeof colors[key] !== 'function' && !key.includes('preset')) {
        let obj = {};
        colors[key].forEach((elem, index) => {
            if(index === 0) {
                obj = {...obj, [50]: elem}
            } else {
                obj = {...obj, [index * 100]: elem}
            }
        })
        realColors = {...realColors, [key]: obj}
    }
}


module.exports = returnImportantColors(realColors);