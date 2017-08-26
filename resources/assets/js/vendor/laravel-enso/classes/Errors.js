class Errors {
    constructor() {
        this.errors = {};
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    get(field) {
        return this.has(field) ? this.errors[field][0] : null;
    }

    set(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (this.has(field)) {
            Vue.delete(this.errors, field);
        }
    }

    empty() {
        for (let field in this.errors) {
            this.clear(field);
        }
    }
}

export default Errors;