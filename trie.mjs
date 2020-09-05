export class Node {
    children = new Map();
    
    constructor() {

        let end = false

        this.isEnd = function () {
            return end;
        }

        this.setEnd = function() {
            end = true;
        }
    }
}

export class Trie {

    root = new Node();

    /**
     * store string in the trie  
     * each character of the string is stored in a child node 
     * of the node containing the previous character 
     * 
     * if a node is the end of the word call setEnd on this node 
     * 
     * @param value word to store
     * @param node node where to store the remaining word
     */
    add(value = '', node = this.root) {
        
        
        if(value == null || value == undefined) {
            return;
        }
        
        value = value.trim();
        
        // if arrived at the node containing 
        // the last character of the string
        if (value.length == 0) {
            node.setEnd();
            return;
        }

        // if first character of the word
        // not among the children of the node
        if (!node.children.has(value[0])) {
            // add new node with character
            node.children.set(value[0], new Node());
        }
        // add rest of the word in child node
        return this.add(value.substring(1), node.children.get(value[0]));
    }

    /**
     * true if word is stored in the trie
     * @param word 
     */
    isWord(word) {
        let node = this.root;

        while (word.length > 1) {

            // if character missing
            if (!node.children.has(word[0])) {
                return false;
            }
            node = node.children.get(word[0]);
            word = word.substring(1);
        }

        // check last node has last letter and is end of a word
        return (node.children.has(word) && node.children.get(word).isEnd()) ? true : false;
    }
    /**
     * return array of words contained in trie
     */
    print(node = this.root) {
        let words = new Array();
        // begin at root node with string ''
        search(node, new String());
        return words.length > 0 ? words : null;

        function search(node = this.root, string) {
            // has children
            if (node.children.size != 0) {
                for (let letter of node.children.keys()) {
                    search(node.children.get(letter), string.concat(letter)); 
                }
                if (node.isEnd()) {
                    words.push(string);
                }
            // trie leaf == end of word
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }

        }
    }

    /**
     * return number of words stored in the trie
     */
    size() {
        let count = 0;

        search(this.root, new String());
        return count;

        function search(node = this.root, string) {
            // has children
            if (node.children.size != 0) {
                for (let letter of node.children.keys()) {
                    search(node.children.get(letter), string.concat(letter)); 
                }
                if (node.isEnd()) {
                    count++;
                }
            // trie leaf == end of word
            } else {
                string.length > 0 ? count++ : undefined;
                return;
            }

        }
    }

    /**
     * return array of words beginning with prefix in trie
     * prefix not present return null
     * @param prefix 
     */
    prefix(prefix) {

        let subNode = subTree.call(this, prefix);

        if (!subNode) { return null; }

        let suffix = this.print(subNode);

        suffix = suffix.map(value => prefix + value);

        return suffix;

        function subTree(prefix) {
            // go to node containing last character of 'prefix'
            // start at root
            // while prefix size > 2
            // get child node containing first character
            let node = this.root;
            while (prefix.length > 0) {

                if (!node.children.has(prefix[0])) {
                    return null;
                }
                node = node.children.get(prefix[0]);
                prefix = prefix.substring(1);
            }
            return node;
        }
    }
}