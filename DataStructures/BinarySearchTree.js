class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node();
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while(true) {
            if(value === currentNode.value) return undefined;
            if(value < currentNode.value) {
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value) {
        return this.find(value) ? true : false;
    }

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}