// left child = 2*i + 1 => left is odd
// right child =  2*i + 2 => right is even
// left + 1 = right
// left + 1 - 2 = right - 2
// left - 1 = right - 2

// i = (left - 1) / 2 = (right - 2) / 2
// parent = (left - 1) / 2 = (right - 2) / 2

// parent > child
export class MinHeap {
    heap = [];

    print() {
        return this.heap.slice();
    }

    /**
     * insert at the end of the heap
     * swap with parent while value < parent 
     * @param value 
     */
    insert(value) {
        // insert at the end
        this.heap.push(value);

        // current node
        let idx = this.heap.length - 1;
        // parent node
        let parentIdx = (idx % 2 === 0) ? (idx - 2) / 2 : (idx - 1) / 2;

        while (idx >= 0 && this.heap[idx] < this.heap[parentIdx]) {
            // swap
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];

            idx = parentIdx;
            parentIdx = (idx % 2 === 0) ? (idx - 2) / 2 : (idx - 1) / 2;
        }

    }

    remove() {
        // get highest value
        const res = this.heap.shift();

        // if remain 0 or 1 value in heap => no need for reordering => exit;
        if (this.heap.length < 2) {
            return res;
        }

        // place last value at root
        this.heap.unshift(this.heap.pop());

        // only root node children left
        // swap if necessary
        if (this.heap.length === 2) {
            if (this.heap[0] > this.heap[1]) {
                [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
            }
            
        // 3 or more nodes
        } else {
            
            // begin at root
            let idx = 0;
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;

            // current node is smaller than one of children
            // error if left of right is undefined
            while (this.heap[idx] > this.heap[left] || this.heap[idx] > this.heap[right]) {
               
                // if node <= left or node <= right
                // and left > right
                // then left > right  and left >= node

                // left goes on top                                
                if (this.heap[right] > this.heap[left]) {

                    [this.heap[idx], this.heap[left]] = [this.heap[left], this.heap[idx]];
                    idx = left;

                // right goes on top
                } else {
                    [this.heap[idx], this.heap[right]] = [this.heap[right], this.heap[idx]];
                    idx = right;
                }

                left = 2 * idx + 1;
                right = 2 * idx + 2;

                // at next iteration => false
                if (this.heap[left] == undefined || this.heap[right] == undefined) {
                    // swap with left
                    if (this.heap[left] && this.heap[idx] > this.heap[left]) {

                        [this.heap[idx], this.heap[left]] = [this.heap[left], this.heap[idx]];
                    }
                    // exit loop
                    break;
                }
            }

        }
        return res;

    }

    isMinHeap() {
        const n = this.heap.length - 1;

        const lastInternalIndx = (n % 2 === 0) ? (n - 2) / 2 : (n - 1) / 2;


        for (let i = 0; i <= lastInternalIndx; i++) {

            if (this.heap[i] > this[2 * i + 1] || this.heap[i] > this.heap[2 * i + 2]) {
                return false;
            }
        }

        return true;
    }

    sort() {
        let result = new Array();
        while (this.heap.length > 0) {
            result.push(this.remove());
            // console.log('this.heap', this.heap);
            // console.log('result', result);
        };
        return result;
    }


}