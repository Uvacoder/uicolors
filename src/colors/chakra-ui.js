const colors = require('@chakra-ui/theme').theme.colors;
const returnImportantColors = require('../utils/returnImportantColors');

module.exports = returnImportantColors(colors).slice(2);