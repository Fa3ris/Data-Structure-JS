export class Set {

    storage = [];

    add(value) {
        if (!this.has(value)) {
            this.storage.push(value);
            return true;
        }
        return false;
    }

    remove(value) { 
        if(this.has(value)) {
            const id = this.storage.indexOf(value);
            this.storage.splice(id, 1);
            return true;
        }
        return false;
    }

    size() {
        return this.storage.length;
     }

    has(value) {
        return this.storage.includes(value);
     }

    values() { 
        return this.storage.slice();
    }

    union(otherSet) {
        const union = new Set();
        this.values().forEach(value => union.add(value));
        otherSet.values().forEach(value => union.add(value));
        return union;
     }

    intersection(otherSet) {
        const intersection = new Set();
        this.values().forEach(value => {
            if (otherSet.has(value)) {
                intersection.add(value);
            }
        })
        return intersection;
     }

    difference(otherSet) {
        const difference = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                difference.add(value)
            }
        })
        return difference;
     }

    /**
     * true if this is a subset of otherSet
     * @param otherSet 
     */
    subset(otherSet) {
        return this.values().every(value => {
            return otherSet.has(value)
        })
     }

}