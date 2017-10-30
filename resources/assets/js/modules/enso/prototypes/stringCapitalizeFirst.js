/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
if (!String.prototype.capitalizeFirst) String.prototype.capitalizeFirst = () => this.charAt(0).toUpperCase() + this.slice(1)
