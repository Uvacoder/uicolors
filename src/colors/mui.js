const colors = require('@material-ui/core/colors');
const returnImportantColors = require('../utils/returnImportantColors');

console.log(returnImportantColors(colors));
module.exports = returnImportantColors(colors).reverse();