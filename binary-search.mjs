
// node --experimental-modules binary-search.mjs

/**
 * return index of val in array, null otherwise
 * @param array 
 * @param val 
 */
function binarySearch(array, val) {

    let left = 0, right = array.length - 1;
    
    while (left <= right) {

        let middle = Math.floor((left + right) / 2);

        if (val > array[middle]) {
            left = middle + 1;
        }  else if (val < array[middle]) {
            right = middle - 1;
        } else {
            return middle;
        }
        
    }

    return null;
}


/**
 * return index of val in array, null otherwise
 * @param array 
 * @param val 
 */
function binarySearchLeftMost(array, val) {

    let left = 0, right = array.length;
    
    while (left < right) {

        let middle = Math.floor((left + right) / 2);

        if (val > array[middle]) {
            left = middle + 1;
        }  else {
            right = middle;
        }
    }

    return left;
}

/**
 * return index of val in array, null otherwise
 * @param array 
 * @param val 
 */
function binarySearchRightMost(array, val) {

    let left = 0, right = array.length;
    
    while (left < right) {

        let middle = Math.floor((left + right) / 2);

        if (val < array[middle]) {
            right = middle;
        }  else {
            left = middle + 1;
        }
    }

    return right - 1;
}


const a1 = [1, 3, 5, 6, 11, 15, 32, 34];
const a2 = [2, 3, 4, 9, 12, 17, 21];
const a3 = [2, 2, 3, 4, 4, 9, 12, 12, 17, 21];

console.log('a1 index of 5', binarySearch(a1, 5));
console.log('a1 index of 15', binarySearch(a1, 15));
console.log('a1 index of 12', binarySearch(a1, 12));


console.log('a2 index of 3', binarySearch(a2, 3));
console.log('a2 index of 17', binarySearch(a2, 17));
console.log('a2 index of 42', binarySearch(a2, 42));


console.log('a3 index of 2', binarySearch(a3, 2));
console.log('a3 left index of 2', binarySearchLeftMost(a3, 2));
console.log('a3 right index of 2', binarySearchRightMost(a3, 2));
console.log('a3 index of 4', binarySearch(a3, 4));
console.log('a3 left index of 4', binarySearchLeftMost(a3, 4));
console.log('a3 right index of 4', binarySearchRightMost(a3, 4));
console.log('a3 index of 12', binarySearch(a3, 12));
console.log('a3 left index of 12', binarySearchLeftMost(a3, 12));
console.log('a3 right index of 12', binarySearchRightMost(a3, 12));