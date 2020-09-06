
/**
 * 
 * @param {*} tab array to sort
 */
function quickSort(tab) {

    const arr = tab.slice();

    quickSort(0, arr.length - 1);

    return arr;

    /**
     * Partition a section of the array given a pivot
     * 
     * It means that section is arranged so that
     * values <= pivot are on left side 
     * and value >= pivot are on right side
     * 
     * @param {*} start start of section to partition
     * @param {*} end end of section to partition
     */
    function quickSort(start, end) {

        if (start >= end) { return; }

        let left = start;
        let right = end;

        const pivot = pickPivot(start, end);

        // while no crossing
        while (left <= right) {

            // one or both are misplaced
            if (arr[left] > pivot || arr[right] < pivot) {

                // both are misplaced
                // swap them
                if (arr[left] > pivot && arr[right] < pivot) {
                    [arr[left], arr[right]] = [arr[right], arr[left]];
                    left++;
                    right--;

                // only one is misplaced
                } else {
                    // left is misplaced but right is OK
                    // find right to swap
                    if (arr[left] > pivot) {
                        while (arr[right] > pivot) {
                            right--;
                        }
                    // right is misplaced but left is OK   
                    // find left to swap
                    } else {
                        while (arr[left] < pivot) {
                            left++;
                        }
                    }
                    // swap if no crossing
                    if (left <= right) {
                        [arr[left], arr[right]] = [arr[right], arr[left]];
                        left++;
                        right--;
                    }
                }

            // both are OK
            } else {
                left++;
                right--;
            }
        }

        /**
         * index so that 
         * for all (start <= i) && (i <= partitionIndex)
         * arr[i] <= pivot 
         * 
         * and for all (partitionIndex < i) && (i <= end) 
         * arr[i] >= pivot
         */
        const partitionIndex = left - 1;

        quickSort(start, partitionIndex);
        quickSort(partitionIndex + 1, end);
    }
        
    function pickPivot(start, end) {
        pivotIdx = Math.floor((start + end) / 2);
        return arr[pivotIdx];
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

const test = [15, 3, 2, 1, 9, 5, 7, 8, 6];

console.log('test', test);
const res = quickSort(test);
console.log('res', res);

const n = 100;
let test2 = new Array(n).fill(0);

test2 = test2.map(() => Math.round(Math.random() * 100));

console.log(test2);

const res2 = quickSort(test2);
console.log(res2);
console.log(isSorted(test2));
console.log(isSorted(res2));