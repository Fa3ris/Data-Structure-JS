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

        function addRight(node){
            if (node.right === null) {
                node.right = new Node(data);
            } else {
                searchTree(node.right);
            }
        }
    }



}
