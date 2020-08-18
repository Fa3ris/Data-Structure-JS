// node --experimental-modules main-linked-list.mjs

import {LinkedList} from './linked-list.mjs';

const ll = new LinkedList();

console.log(`linked list = ${ll.print()}`);
ll.add(3);
ll.add(56);
ll.add(91);
ll.add(32);
ll.add(78);
console.log(`linked list = ${ll.print()}`);
ll.remove(3);
console.log(`remove 3 linked list = ${ll.print()}`);
ll.remove(91);
console.log(`remove 91 linked list = ${ll.print()}`);
ll.remove(78);
console.log(`remove 78 linked list = ${ll.print()}`);
ll.remove('abc');
ll.remove('abc');
ll.remove('abc');
console.log(`remove abc 3 times linked list = ${ll.print()}`);
console.log(`linked list size = ${ll.size()}`);
ll.remove(56);
ll.remove(32);
console.log(`remove all items linked list = ${ll.print()}`);
console.log(`remove all items linked list size = ${ll.size()}`);

const ll2 = new LinkedList();

ll2.add(56);
ll2.add(3);
ll2.add(91);
ll2.add(32);
ll2.add(78);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 index of 56 = ${ll2.indexOf(56)}`);
console.log(`ll2 index of 91 = ${ll2.indexOf(91)}`);
console.log(`ll2 index of 101 = ${ll2.indexOf(101)}`);
console.log(`ll2 index of 78 = ${ll2.indexOf(78)}`);


console.log(`ll2 element at 0 = ${ll2.elementAt(0)}`);
console.log(`ll2 element at -1 = ${ll2.elementAt(-1)}`);
console.log(`ll2 element at 1 = ${ll2.elementAt(1)}`);
console.log(`ll2 element at 2 = ${ll2.elementAt(2)}`);
console.log(`ll2 element at 3 = ${ll2.elementAt(3)}`);
console.log(`ll2 element at 4 = ${ll2.elementAt(4)}`);
console.log(`ll2 element at 5 = ${ll2.elementAt(5)}`);

console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 add 22 at index 2 = ${ll2.addAt(2, 22)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 size = ${ll2.size()}`);
console.log(`ll2 add 999 at index 0 = ${ll2.addAt(0, 999)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 add 321 at index 6 = ${ll2.addAt(6, 321)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 add 7676 at index 6 = ${ll2.addAt(7, 7676)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 add 1234567 at index 9 = ${ll2.addAt(9,1234567)}`);

console.log(`ll2 remove at index 9 = ${ll2.removeAt(9)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 remove at index 8 = ${ll2.removeAt(8)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 remove at index 0 = ${ll2.removeAt(0)}`);
console.log(`ll2 = ${ll2.print()}`);
console.log(`ll2 remove at index 3 = ${ll2.removeAt(3)}`);
console.log(`ll2 = ${ll2.print()}`);