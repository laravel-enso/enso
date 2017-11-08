Array.prototype.unique = function() {
    return this.filter((value, index, self) => self.indexOf(value) === index);
};
