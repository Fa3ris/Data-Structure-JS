// run with `node --experimental-modules main-dijkstra.mjs`

import {Graph} from './graph.mjs';

const graph = new Graph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addNode('f');
try {
    graph.addNode('f');
} catch (error) {
    console.error(`${error.name} : ${error.message}`);
}

graph.connectNodes('a', 'b', 5);

try {
    graph.connectNodes('w', 'z', 5);
} catch (error) {
    console.error(`${error.name} : ${error.message}`);
}

graph.connectNode('e', 'a', 3);
graph.connectNode('e', 'a', 3);
graph.connectNode('a', 'a', 3);

try {
    graph.connectNode('r', 't', 3);
} catch (error) {
    console.error(`${error.name} : ${error.message}`);
}


// graph.print();

const g2 = new Graph();
g2.addNode('a');
g2.addNode('b');
g2.addNode('c');
g2.addNode('d');
g2.addNode('e');
g2.addNode('f');
g2.addNode('impossible');


g2.connectNodes('a', 'b', 4);
g2.connectNodes('a', 'c', 4);

g2.connectNodes('b', 'c', 2);

g2.connectNodes('c', 'd', 3);
g2.connectNodes('c', 'e', 1);
g2.connectNodes('c', 'f', 6);

g2.connectNodes('d', 'f', 2);
g2.connectNodes('e', 'f', 3);

// one way connection
g2.connectNode('impossible', 'f', 100);

// g2.print();

const resA = g2.dijkstra('a');

console.log(resA.dist);
console.log(resA.paths);


const resB = g2.dijkstra('b');

console.log(resB.dist);
console.log(resB.paths);


const resImpossible = g2.dijkstra('impossible');

console.log(resImpossible.dist);
console.log(resImpossible.paths);
