import { Node } from "./trie.mjs";
import { Trie } from "./trie.mjs";


const node = new Node();

console.log(node.isEnd());
node.setEnd();
console.log(node.isEnd());

const trie = new Trie();

console.log(`trie = ${trie.print()}`);

trie.add('hello');
trie.add('hell');
trie.add('hi');
trie.add('at');
trie.add('arrival');
trie.add('');
trie.add('  ');
trie.add('            ');
trie.add();
trie.add(null);
trie.add(undefined);
console.log(`trie = ${trie.print()}`);
console.log(`'at' is a word: ${trie.isWord('at')}`);
console.log(`'lol' is a word: ${trie.isWord('lol')}`);
console.log(`'hello' is a word: ${trie.isWord('hello')}`);
console.log(`'AT' is a word: ${trie.isWord('AT')}`);
console.log(`'lol' is a word: ${trie.isWord('lol')}`);
console.log(`trie size = ${trie.size()}`);


const trie2 = new Trie();

trie2.add('hello');
trie2.add('hell');
trie2.add('HELLO');
console.log(`trie2 = ${trie2.print()}`);
console.log(`trie2 size = ${trie2.size()}`);
console.log(`'hello' is a word: ${trie2.isWord('hello')}`);

