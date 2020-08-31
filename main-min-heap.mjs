// run with `node --experimental-modules main-min-heap.mjs`
import { MinHeap } from "./min-heap.mjs";

const minH = new MinHeap();

minH.insert(3);
minH.insert(5);
minH.insert(10);
minH.insert(6);
minH.insert(100);
minH.insert(20);
minH.insert(6);
minH.insert(-21);
minH.insert(10);
minH.insert(100);
minH.insert(1);
minH.insert(-21);
console.log(`heap = ${minH.print()}`);
minH.insert(100);
console.log(`heap = ${minH.print()}`);
minH.insert(42);
console.log(`heap = ${minH.print()}`);
console.log(`isMaxHeap = ${minH.isMinHeap()}`);

console.log(`sorted Heap = ${minH.sort()}`);


const minH2 = new MinHeap();

minH2.insert(5);
minH2.insert(3);
minH2.insert(10);
minH2.insert(6);
minH2.insert(100);
minH2.insert(20);
minH2.insert(6);
minH2.insert(-21);
minH2.insert(10);
minH2.insert(100);
minH2.insert(1);
minH2.insert(-21);
minH2.insert(100);
minH2.insert(42);
console.log(`heap2 = ${minH2.print()}`);
console.log(`sorted Heap = ${minH2.sort()}`);

console.log(`isMaxHeap2 = ${minH2.isMinHeap()}`);


const minH3 = new MinHeap();

minH3.insert(5);
minH3.insert(4);
minH3.insert(3);
minH3.insert(2);
minH3.insert(1);

console.log(`heap3 = ${minH3.print()}`);
console.log(`sorted heap3 = ${minH3.sort()}`);