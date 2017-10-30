/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
if (!Array.prototype.pluck) Array.prototype.pluck = value => this.map(object => object[value])
