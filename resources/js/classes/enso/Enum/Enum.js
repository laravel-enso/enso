class Enum {
    constructor(data, __) {
        this._internalData = data;
        this.__ = __;

        Object.keys(data)
            .forEach((key) => {
                this[data[key]] = key;
            });
    }

    _get(key) {
        return this.__(this._internalData[key]);
    }

    _has(key) {
        return Object.prototype.hasOwnProperty
            .call(this._internalData, key);
    }

    _select() {
        return Object.keys(this._internalData).map(key => ({
            id: key, name: this.__(this._internalData[key]),
        }));
    }

    _keys() {
        return Object.keys(this._internalData);
    }

    _values() {
        return Object.keys(this._internalData)
            .map(key => this.__(this._internalData[key]));
    }

    _all() {
        return this._internalData;
    }

    _data() {
        return Object.keys(this._internalData).reduce((obj, key) => {
            obj[key] = this.__(this._internalData[key]);
            return obj;
        }, {});
    }

    _randomKey() {
        return this._keys()[this._randomIndex()];
    }

    _randomValue() {
        return this._values()[this._randomIndex()];
    }

    _randomIndex() {
        return Math.floor(Math.random()
            * Object.keys(this._internalData).length);
    }
}

export default Enum;
