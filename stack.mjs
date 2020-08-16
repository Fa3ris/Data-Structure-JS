export class Stack {

    count = 0;
    storage = {};

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) { return undefined; }
        this.count--;
        return this.storage[this.count];
    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count-1];
    }

}
