export class Queue {

    storage = [];

    enqueue(value) {
        this.storage.push(value);
    }

    dequeue() {
        return this.storage.shift();
    }

    size() {
        return this.storage.length;
    }

    empty() {
        return this.storage.length === 0;
    }

    values() {
        return this.storage.slice();
    }
}