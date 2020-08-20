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
