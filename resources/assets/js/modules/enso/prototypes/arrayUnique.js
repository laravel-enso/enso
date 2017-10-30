/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
if (!Array.prototype.unique) Array.prototype.unique = () => this.filter((value, index, self) => self.indexOf(value) === index)
