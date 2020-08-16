// run with `node --experimental-modules main.mjs`
import {Stack} from './stack.mjs';
import {Set} from './set.mjs';
import { Queue } from './queue.mjs';

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(4);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


const set = new Set();

set.add(3);
set.add(5);
console.log(`add 11 for the 1st time: ${set.add(11)}`);
console.log(`add 11 for the 2nd time: ${set.add(11)}`);
set.add(132);

console.log(set.values());
console.log(`set has value 5: ${set.has(5)}`);
console.log(`set has value 10: ${set.has(10)}`);

console.log(set.remove(3));
console.log(set.has(3));
set.remove(3);
console.log(set.values());

const set1 = new Set();
set1.add(3);
set1.add(5);
set1.add(1);
set1.add(6);
console.log(`set 1: {${set1.values()}}`);
const set2 = new Set();
set2.add(3);
set2.add(2);
set2.add(90);
set2.add(19);
console.log(`set 2: {${set2.values()}}`);

console.log(`union: {${set1.union(set2).values()}}`);
console.log(`intersection: {${set1.intersection(set2).values()}}`);
console.log(`difference: {${set1.difference(set2).values()}}`);
console.log(`set1 is a subset of set2: ${set1.subset(set2)}`);

const set3 = new Set();
set3.add(2);
set3.add(1);
console.log(`set 3: {${set3.values()}}`);
const set4 = new Set();
set4.add(1);
set4.add(2);
set4.add(3);
set4.add(4);
console.log(`set 4: {${set4.values()}}`);
console.log(`set3 is a subset of set4: ${set3.subset(set4)}`);

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(43);
queue.enqueue(17);
console.log(`queue: ${queue.values()}`);
queue.dequeue();
console.log(`queue: ${queue.values()}`);
queue.dequeue();
console.log(`queue: ${queue.values()}`);
console.log(`queue size: ${queue.size()}`);
console.log(`queue is empty: ${queue.empty()}`);
queue.dequeue();
console.log(`queue: ${queue.values()}`);
queue.dequeue();
console.log(`queue: ${queue.values()}`);
console.log(`queue is empty: ${queue.empty()}`);
