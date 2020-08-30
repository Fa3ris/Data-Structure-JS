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


graph.print();