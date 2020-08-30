// run with `node --experimental-modules main-graph-bfs.mjs`


/**
 * oriented adjacency matrix
 *   | 0 | 1 | 2 | 3 | 4
 * --------------------
 * 0 | 0 | 1 | 1 | 1 | 0
 * --------------------
 * 1 | 0 | 0 | 1 | 0 | 0
 * --------------------
 * 2 | 1 | 1 | 0 | 0 | 0
 * --------------------
 * 3 | 0 | 0 | 0 | 1 | 0
 * --------------------
 * 4 | 0 | 1 | 0 | 0 | 0
 */
const matrix = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
];

/**
 * return object containing distances between the root node and each node in the graph
 * @param graph 
 * @param root root node
 */
function distBFS(graph, root) {

    // return object
    const nodesDist = {};

    // set initial distances
    for (let i = 0; i < graph.length; i++) {
        nodesDist[i] = Infinity;
    }

    nodesDist[root] = 0;

    // queue of nodes to process
    const queue = [root];

    // current node to process
    let current;

    while (queue.length > 0) {
        // dequeue
        current = queue.shift();

        // connections of current node; 0=no connection; 1=connection
        const connected = graph[current];

        // neighbor nodes actually reachable
        const neighborIdx = [];

        // first occurence of connection
        let idx = connected.indexOf(1);

        while (idx != -1) {
            neighborIdx.push(idx);

            // what happens if idx + 1 out of bound ?
            idx = connected.indexOf(1, idx + 1);
        }

        for (let i = 0; i < neighborIdx.length; i++) {
            // for each that has not been processed (i.e. dist = infinity)
            if (nodesDist[neighborIdx[i]] == Infinity) {
                // dist to neighbor = dist to current + 1
                nodesDist[neighborIdx[i]] = nodesDist[current] + 1;
                // add node to queue for processing
                queue.push(neighborIdx[i]);
            }
        }
    }

    return nodesDist;
}

console.log(`dist from node 0`, distBFS(matrix, 0));
console.log(`dist from node 1`, distBFS(matrix, 1));
console.log(`dist from node 2`, distBFS(matrix, 2));
console.log(`dist from node 3`, distBFS(matrix, 3));
console.log(`dist from node 4`, distBFS(matrix, 4));