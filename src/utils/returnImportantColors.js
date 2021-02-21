module.exports = function(colors) {
    return Object.entries(colors)
    .filter(([key, value]) => typeof value !== 'string');
}