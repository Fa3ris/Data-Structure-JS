// O(n * log(n)) time
// O(n) space
function mergeSort(tab) {

    // array to sort
    const arr = tab.slice();

    // temp array used for merging
    const temp = new Array(arr.length);

    // init
    sort(0, arr.length - 1);

    return arr;

    /**
     * sorts the elements of arr in section [startIdx, endIdx]
     * @param {*} startIdx start index of section to sort
     * @param {*} endIdx  end index of section to sort
     */
    function sort(startIdx, endIdx) {

        // only one element remains
        // section is sorted
        if (startIdx == endIdx) { return; }

        // middle
        const m = Math.floor((startIdx + endIdx) / 2);

        // sort left
        sort(startIdx, m);

        // sort right
        sort(m+1, endIdx);

        // merge left and right
        merge(startIdx, endIdx);
    }

    /**
     * Take two sorted subsections **left** and **right** and merge them into one sorted section 
     * @param {*} startIdx 
     * @param {*} endIdx 
     */
    function merge(startIdx, endIdx) {
        // left side
        let leftStart = startIdx;
        const leftEnd = Math.floor((startIdx + endIdx) / 2);

        // right side
        let rightStart = leftEnd + 1;
        const rightEnd = endIdx;

        // idx of temp
        let idx = startIdx;

        // compare left and right
        // copy smallest to temp
        while ((leftStart <= leftEnd) && (rightStart <= rightEnd)) {

            if (arr[leftStart] < arr[rightStart]) {
                temp[idx] = arr[leftStart];
                leftStart++;
            } else {
                temp[idx] = arr[rightStart];
                rightStart++;
            }
            idx++;
        }

        // copy the rest of left
        while (leftStart <= leftEnd) {
            temp[idx] = arr[leftStart];
            leftStart++;
            idx++;
        }

        // copy the rest of right
        while (rightStart <= rightEnd) {
            temp[idx] = arr[rightStart];
            rightStart++;
            idx++;
        }

        // copy temp to arr
        for (let i = startIdx; i <= endIdx; i++) {
            arr[i] = temp[i];
        }

    }
}

function isSorted(tab) {
    for (let i = 0; i < tab.length - 1; i++) {
        if (tab[i] > tab[i + 1]) {
            return false;
        }
    }
    return true;
}


const test = [6, 7, 3, 2, 1, 4, 9];

console.log('test', test);
const res = mergeSort(test);
console.log('res', res);

const n = 100;
let test2 = new Array(n).fill(0);

test2 = test2.map(() => Math.round(Math.random() * 100));

console.log(test2);

const res2 = mergeSort(test2);
console.log(res2);
console.log(isSorted(test2));
console.log(isSorted(res2));


const { performance } = require('perf_hooks');

const nTest = 100;
const testSize = 1000;
const times = new Array();
let resTest;

for (let i=0; i < nTest; i++) {

    let test = new Array(testSize).fill(0);
    test = test.map(() => Math.round(Math.random() * 100));

    const t0 = performance.now();
    resTest = mergeSort(test);
    const t1 = performance.now();

    if (!isSorted(resTest)) {
        console.error(resTest);
        throw new Error('not sorted !!!!');
    }
    times.push(t1 - t0);
}

const totalTimes = times.reduce((previous, current) => current += previous);
const avg = totalTimes / nTest;

// console.log('times', times);

console.log('avg', avg);




