const colors = require('tailwindcss/colors');
const returnImportantColors = require('../utils/returnImportantColors');

module.exports = returnImportantColors(colors).reverse();