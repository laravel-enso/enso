Array.prototype.unique = function() {
    return this.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};