// bubble sort is a naive algorithm
// bubble up biggest elements 

// O(1) space : space required by the algorithm to process data is constant;
// it does not grow with the size of the data on which the algorithm is operating

// O(n**2) time : very bad
function bubbleSort(tab) {

    /*
  until array is not sorted
      walk through
      swap out of order elements 
   */

    const arr = tab.slice();

    let isSorted = false;
    let lastIndex = arr.length - 1;

    while (!isSorted) {
        isSorted = bubbleUntil(lastIndex);
        lastIndex--;
    }

    return arr;

    function bubbleUntil(lastIndex) {
        isSorted = true;
        for (let i = 0; i < lastIndex; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }
        return isSorted;
    }

}

const test = [6, 7, 3, 2, 1, 4, 9];

const res = bubbleSort(test);
console.log('test', test);
console.log('res', res);
