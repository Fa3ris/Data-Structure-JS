// run with `node --experimental-modules main-bst.mjs`

import { BST } from './binary-search-tree.mjs';

const bst = new BST();

bst.add(3);
bst.add(6);
bst.add(4);
bst.add(11);
bst.add(1);

console.log(`tree min = ${bst.getMin()}`);
console.log(`tree max = ${bst.getMax()}`);

console.log(`tree has 4 : ${bst.has(4)}`);
console.log(`tree has 26 : ${bst.has(26)}`);
console.log(`tree has 6 : ${bst.has(6)}`);

bst.remove(6);
console.log(`tree has 6 : ${bst.has(6)}`);

console.log(`inOrder: ${bst.inOrder()}`);
console.log(`preOrder: ${bst.preOrder()}`);
console.log(`postOrder: ${bst.postOrder()}`);
console.log(`levelOrder: ${bst.levelOrder()}`);