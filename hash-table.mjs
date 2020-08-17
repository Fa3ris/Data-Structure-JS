export function hash(string, max) {
    let hash = 0;

    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

export class HashTable {

    storage = new Array();
    constructor(nbBuckets = 4) {

        this.nbBuckets = nbBuckets;
    }

    print() {
        console.log(this.storage);
    }

    add(key, value) {
        const id = hash(key, this.nbBuckets);

        if (!this.storage[id]) {
            this.storage[id] = [
                { key, value }
            ];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[id].length; i++) {
                if (this.storage[id][i].key === key) {
                    this.storage[id][i].value = value;
                    inserted = true;
                }
            }
            if (!inserted) {
                this.storage[id].push({ key, value });
            }
        }
    }

    get(key) {
        const id = hash(key, this.nbBuckets);
        if (!this.storage[id]) {
            return null;
        }
        for (let i = 0; i < this.storage[id].length; i++) {
            if (this.storage[id][i].key === key) {
                return this.storage[id][i].value;
            }
            return null;

        }
    }

    remove(key) {
        const id = hash(key, this.nbBuckets);
        
        if (!this.storage[id]) {
            return false;
        }
        // delete bucket
        if (this.storage[id].length === 1 && this.storage[id][0].key === key) {
            delete this.storage[id];
            return true;
        }

        // delete key in bucket
        for (let i = 0; i < this.storage[id].length; i++) {
            if (this.storage[id][i].key === key) {
                delete this.storage[id][i];
                return true;
            }
        }
    }
}