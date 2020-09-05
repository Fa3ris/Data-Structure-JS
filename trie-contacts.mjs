// run with `node --experimental-modules trie-contacts.mjs`
import { Trie } from "./trie.mjs";

const trie = new Trie();

trie.add('hello');
trie.add('hello');
trie.add('hell');
trie.add('hi');
trie.add('h');
trie.add('at');
trie.add('arrival');
trie.add('hoy');
trie.add('gayle');
trie.add('garry');
trie.add('geera');
trie.add('g');

console.log(`trie = ${trie.print()}`);
console.log(`word beginning with 'h' = ${trie.prefix('h')}`);
console.log(`word beginning with 'he' = ${trie.prefix('he')}`);
console.log(`word beginning with 'bet' = ${trie.prefix('bet')}`);
console.log(`word beginning with 'bet' = ${trie.prefix('g')}`);
console.log("word beginning with 'g'", trie.prefix('g'));
