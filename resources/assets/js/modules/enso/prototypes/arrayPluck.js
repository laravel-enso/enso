Array.prototype.pluck = function(value) {
    return this.map(object => object[value]);
};
