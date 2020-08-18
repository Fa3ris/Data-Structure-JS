class Node {
    next = null;
    constructor(element) {
        this.element = element;
    }
}

export class LinkedList {

    length = 0;
    head = null;

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    add(element) {
        let node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.length++;
    }

    remove(element) {
        let current = this.head, previous;
        if (current.element === element) {
            this.head = current.next;
            this.length--;
        } else {
            while (current.next) {
                if (current.next.element === element) {
                    current.next = current.next.next;
                    this.length--;
                    return;
                } else {
                    current = current.next;
                }

            }
        }
    }

    print() {
        const values = new Array();
        let current = this.head;
        while (current) {
            values.push(current.element);
            current = current.next;
        }
        return values;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(element) {
        let index = -1;
        let current = this.head;
        while (current) {
            index++;
            if (current.element === element) {
                return index;
            } else {
                current = current.next;
            }
        }
        return -1;
    }

    elementAt(index) {
        if (index < 0) {
            return null;
        }
        let current = this.head;
        let count = 0;

        while (current && count < index) {
            current = current.next
            count++;
        }

        return current ? current.element : null;
    }

    addAt(index, element) {
        const node = new Node(element);
        if (index < 0 || index >= this.length) {
            return false;
        }

        let current = this.head;
        let previous;
        let currentIndex = 0;

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previous = current;
                current = current.next;
            }

            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let previous;
        let currentIndex = 0;
        let valRemoved;

        if (index === 0) {
            valRemoved = this.head.element;
            this.head = this.head.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previous = current;
                current = current.next;
            }
            valRemoved = current.element;
            previous.next = current.next;
        }
        this.length--;
        return valRemoved;
    }
}