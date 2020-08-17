import { Node } from "./trie.mjs";
import { Trie } from "./trie.mjs";


const node = new Node();

console.log(node.isEnd());
node.setEnd(true);
console.log(node.isEnd());
node.setEnd(false);
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