
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

        this.nodes.get(start).connectNode(end, dist);
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

        this.nodes.get(start).connectNode(end, dist);
        this.nodes.get(end).connectNode(start, dist);
    }


    /**
     * display neighbors for each node
     */
    print() {
        for (const [name, node] of this.nodes.entries()) {
            console.group(`${name} has following neighbors`)
            for (const [name, dist] of node.neighbors.entries()) {
                console.log(`${name} : ${dist}`);
            }
            console.groupEnd();
        }
    }


    /**
     * return object containing
     * list of shortest distance from root to each node
     * list of shortest path from root to each node
     * @param root name of root node
     */
    dijkstra(root) {

        root = root.toLowerCase();

        if (!this.nodes.has(root)) {
            throw new Error(`${root} not present`);
        }

        const dist = new Map(), // dist of each node to root { [node.name] : dist }
            previous = new Map(), // parent node of each node to reach root { [node.name] : parent.name | null }
            unvisited = new Set(); // unvisited/unprocessed nodes { node.name }

        this.nodes.forEach((value, key) => {
            dist.set(key, Infinity);
            previous.set(key, null);
            unvisited.add(key);
        });

        dist.set(root, 0);

        let current = root;

        while (unvisited.size > 0) {

            let currentNode = this.nodes.get(current);

            for (const [neighbor, neighborDist] of currentNode.neighbors.entries()) {
                // console.log(`${neighbor.name} : ${dist}`);

                if (unvisited.has(neighbor)) {
                    // dist root to current + dist current to neighbor
                    const tempDist = dist.get(current) + neighborDist;

                    if (tempDist < dist.get(neighbor)) {
                        dist.set(neighbor, tempDist);
                        previous.set(neighbor, current);
                    }
                }
            }

            unvisited.delete(current);

            // find shortest path node among unvisited

            // inefficient
            const list = new Array();
            
            unvisited.forEach(value => {
                list.push(value);
            })

            current = list.shift();

            list.forEach(value => {
                if (dist.get(value) < dist.get(current)) {
                    current = value;
                }
            })

            if (dist.get(current) === Infinity) {
                break;
            }

        }

        const paths = new Map();

        this.nodes.forEach((value, key) => {
        
            const path = new Array();

            path.push(key);
            let previousName = previous.get(key);
            while (previousName != null) {
                path.push(previousName);
                previousName = previous.get(previousName);
            }
            path.reverse();
            paths.set(key, path);

        });

        return {dist, paths};

    }
}

class Node {

    constructor(name) {
        this.name = name;
        this.neighbors = new Map();
    }

    connectNode(name, dist) {
        if (name !== this.name) {
            this.neighbors.set(name, dist);
        }
    }

    dist(name) {
        return this.neighbors.has(name) ? this.neighbors.get(name) : Infinity;
    }
}