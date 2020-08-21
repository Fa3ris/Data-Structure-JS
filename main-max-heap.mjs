// run with `node --experimental-modules main-max-heap.mjs`
import { MaxHeap } from "./max-heap.mjs";

const maxH = new MaxHeap();

maxH.insert(3);
maxH.insert(5);
maxH.insert(10);
maxH.insert(6);
maxH.insert(100);
maxH.insert(20);
maxH.insert(6);
maxH.insert(-21);
maxH.insert(10);
maxH.insert(100);
maxH.insert(1);
maxH.insert(-21);
console.log(`heap = ${maxH.print()}`);
maxH.insert(100);
console.log(`heap = ${maxH.print()}`);
maxH.insert(42);
console.log(`heap = ${maxH.print()}`);
console.log(`isMaxHeap = ${maxH.isMaxHeap()}`);

console.log(`sorted Heap = ${maxH.sort()}`);


const maxH2 = new MaxHeap();

maxH2.insert(5);
maxH2.insert(3);
maxH2.insert(10);
maxH2.insert(6);
maxH2.insert(100);
maxH2.insert(20);
maxH2.insert(6);
maxH2.insert(-21);
maxH2.insert(10);
maxH2.insert(100);
maxH2.insert(1);
maxH2.insert(-21);
maxH2.insert(100);
maxH2.insert(42);
console.log(`heap2 = ${maxH2.print()}`);
console.log(`sorted Heap = ${maxH2.sort()}`);

console.log(`isMaxHeap2 = ${maxH2.isMaxHeap()}`);


const maxH3 = new MaxHeap();

maxH3.insert(5);
maxH3.insert(4);
maxH3.insert(3);
maxH3.insert(2);
maxH3.insert(1);

console.log(`heap3 = ${maxH3.print()}`);
console.log(`sorted heap3 = ${maxH3.sort()}`);