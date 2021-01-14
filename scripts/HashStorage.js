export class HashStorage {

    constructor() {
        this.storage = {}
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        return this.storage = key in this.storage ? delete this.storage[key] : false;
    }

    getKeys() {
        return Object.keys(this.storage)
    }
}

