Array.prototype.pluck = function(value) {
    return this.map(object => {
        return object[value];
    });
};