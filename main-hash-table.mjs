// run with `node --experimental-modules main-hash-table.mjs`

import { hash } from "./hash-table.mjs";
import { HashTable } from "./hash-table.mjs";


const nbBuckets = 4;
console.log(`'hello' hash = ${hash('hello', nbBuckets)}`);
console.log(`'world' hash = ${hash('world', nbBuckets)}`);
console.log(`'hello world' hash = ${hash('hello world', nbBuckets)}`);
console.log(`'but i do not know' hash = ${hash('but i do not know', nbBuckets)}`);

const hashTable = new HashTable(nbBuckets);

hashTable.add('hello', 10);
hashTable.add('world', 33);
hashTable.add('hello world', 321);
hashTable.add('but i do not know', 198);

hashTable.print();

console.log(`key 'hello' value = ${hashTable.get('hello')}`);
hashTable.add('hello', 1145);
hashTable.print();
console.log(`key 'hello' value = ${hashTable.get('hello')}`);
console.log(`key 'absent' value = ${hashTable.get('absent')}`);



console.log(`remove 'absent' : ${hashTable.remove('absent')}`);
hashTable.print();
console.log(`remove 'hello' : ${hashTable.remove('hello')}`);
hashTable.print();
console.log(`remove 'but i do not know' : ${hashTable.remove('but i do not know')}`);
hashTable.print();