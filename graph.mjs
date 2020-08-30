
export class Graph {

    nodes = new Map();

    addNode(name) {
        name = name.toLowerCase();

        if (!this.nodes.has(name)) {
            this.nodes.set(name, new Node(name));
        } else {
            throw new Error(`${name} already present in graph`);
        }
    }

    /**
     * connect nodes in one direction
     * @param start 
     * @param end 
     * @param dist 
     */
    connectNode(start, end, dist) {
        start = start.toLowerCase();
        end = end.toLowerCase();

        if (!this.nodes.has(start)) {
            throw new Error(`${start} not present`);
        }
        if (!this.nodes.has(end)) {
            throw new Error(`${end} not present`);
        }

        this.nodes.get(start).connectNode(this.nodes.get(end), dist);
    }

    /**
     * connect nodes in both directions
     * @param start 
     * @param end 
     * @param dist 
     */
    connectNodes(start, end, dist) {
        start = start.toLowerCase();
        end = end.toLowerCase();

        if (!this.nodes.has(start)) {
            throw new Error(`${start} not present`);
        }
        if (!this.nodes.has(end)) {
            throw new Error(`${end} not present`);
        }

        this.nodes.get(start).connectNode(this.nodes.get(end), dist);
        this.nodes.get(end).connectNode(this.nodes.get(start), dist);
    }


    /**
     * display neighbors for each node
     */
    print() {
        for (const [name, node] of this.nodes.entries()) {
            console.group(`${name} has following neighbors`)
            for (const [edge, dist] of node.neighbors.entries()) {
                console.log(`${edge.name} : ${dist}`);
            }
            console.groupEnd();
        }
    }


    /**
     * return object containing
     * list of shortest distance from root to each node
     * list of shortest path from root to each node
     * @param root 
     */
    dijkstra(root) {
        const dist = [], paths = [];

        // TODO
        
        return {dist, paths};

    }
}

class Node {

    constructor(name) {
        this.name = name;
        this.neighbors = new Map();
    }

    connectNode(node, dist) {
        if (node.name !== this.name) {
            this.neighbors.set(node, dist);
        }
    }
}