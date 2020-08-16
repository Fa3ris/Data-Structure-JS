export class Node {
    constructor(data, left = null, right = null) {

        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST {

    constructor() {
        this.root = null;
    }

    add(data) {

        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            searchTree(node)
        }

        function searchTree(node) {
            if (data < node.data) {
                // add left
                addLeft(node);
            } else if (data > node.data) {
                // add right
                addRight(node);
            } else {
                // cannot have duplicates
                console.log('cannot have duplicates !!!');
            }
        }

        function addLeft(node) {
            if (node.left === null) {
                node.left = new Node(data);
            } else {
                searchTree(node.left);
            }
        }

        function addRight(node) {
            if (node.right === null) {
                node.right = new Node(data);
            } else {
                searchTree(node.right);
            }
        }
    }

    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    has(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) { return true; }

            current = (data < current.data) ? current.left : current.right;
        }

        return false;
    }

    remove(data) {

        this.root = removeNode(this.root, data);

        function removeNode(node, data) {

            // data to remove not found
            if (node === null) {
                return null;
            }

            // perform removal
            if (data === node.data) {

                return getNewNode(node);

                // remove in left subtree
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;

                // remove in right subtree
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }

            /**
             * return the reference to the new node after removal
             * @param node actual node
             */
            function getNewNode(node) {
                // no child -> remove
                if (node.left === null && node.right === null) {
                    return null;
                }

                // only one right child -> return right child
                else if (node.left === null) {
                    return node.right;
                }

                // only one left child -> return left child
                else if (node.right === null) {
                    return node.left;
                }

                // both children
                else {

                    // find min in right subtree and replace node data
                    const minNode = getMinNode(node.right);
                    node.data = minNode.data;

                    // remove min from right subtree
                    node.right = removeNode(node.right, minNode.data);
                    return node;
                }
            }

            /**
             * return node with minimum value
             * @param current 
             */
            function getMinNode(current) {
                while (current.left !== null) {
                    current = current.left;
                }
                return current;
            }

        }
    }

    // BREADTH FIRST SEARCH

    levelOrder() {

        if (this.root === null) {
            return null;
        }

        const data = new Array();
        const queue = Array();

        queue.push(this.root);
        while (queue.length > 0) {
            // dequeue
            let node = queue.shift();

            data.push(node.data);
            if (node.left !== null) {
                // enqueue
                queue.push(node.left);
            }
            if (node.right !== null) {
                // enqueue
                queue.push(node.right);
            }
        }
        return data;

    }

    // DEPTH FIRST SEARCH

    // N=node
    // L=left-subtree
    // R=right-subtree

    /**
     * inOrder (L->N->R)
     * return values from left-most to right-most node
     */
    inOrder() {
        if (this.root) {
            return null;
        }

        const data = new Array();
        traverseInOrder(this.root);
        return data;

        function traverseInOrder(node) {
            // short-circuit
            node.left && traverseInOrder(node.left);
            data.push(node.data);
            node.right && traverseInOrder(node.right);
        }
    }


    /**
     * preOrder (N->L->R)
     * return values starting from roots
     */
    preOrder() {
        if (this.root === null) {
            return null;
        }

        const data = new Array();
        traverseInPostOrder(this.root);
        return data;
        
        function traverseInPostOrder(node) {
            data.push(node.data);
            // short-circuit
            node.left && traverseInPostOrder(node.left);
            node.right && traverseInPostOrder(node.right);
        }
    }

    /**
     * postOrder (L->R->N)
     * return values starting from leaves
     */
    postOrder() {
        if (this.root === null) {
            return null;
        }

        const data = new Array();
        traverseInPostOrder(this.root);
        return data;
        
        function traverseInPostOrder(node) {
            // short-circuit
            node.left && traverseInPostOrder(node.left);
            node.right && traverseInPostOrder(node.right);
            data.push(node.data);
        }
    }
}
