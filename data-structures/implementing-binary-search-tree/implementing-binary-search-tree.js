/**
 * Our tree looks like as below ;)
 *
 *         9
 *    4         20
 * 1     6   15   170
 */

//This is only just one element on the tree
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
        const newNode = new Node(value);

        //If true, tt means new node is the first element on the tree
        if (this.root === null) {
            this.root = newNode;
        }

        let currentNode = this.root;
        while (true) {
            //Add to left
            if (value < currentNode.value) {
                //Is there left node?
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                //It is shifting to the left of tree until value < currentNode.value
                currentNode = currentNode.left;

                //If you found on left, do not check right side then
                return;
            }

            //Add to right
            if (value > currentNode.value) {
                //Is there right node?
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                //It is shifting to the right of tree until value > currentNode.value
                currentNode = currentNode.right;
            }

            //If value < currentNode.value then do not add it anywhere
            return;
        }
    }

    lookup(value) {
        //If root is not exist, no need to check all tree
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            //Go to left for searching
            if (value < currentNode.value) {
                currentNode = currentNode.left;
                return this;
            }

            //Go to right for searching
            if (value > currentNode.value) {
                currentNode = currentNode.left;
                return this;
            }

            //Oh, we found our element we are looking for!
            if (value === currentNode.value) {
                return currentNode;
            }

            //If element not found then just return false
            return false;
        }
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            //Go to left
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }

            //Go to right
            if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }

            //Oh, we found our element we are looking for!
            if (value === currentNode.value) {
                //Option 1: No right element
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                        return;
                    }

                    //If parent > current value, make current left child a child of parent
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                        return;
                    }

                    //If parent < current value, make left child a right child of parent
                    if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.left;
                        return;
                    }
                }

                //Option 2: Right child which does not have a left child
                if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                        return;
                    }

                    //If parent > current, make right child of the left the parent
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right;
                        return;
                    }

                    //If parent < current, make right child a right child of the parent
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                        return;
                    }
                }

                //Option 3: Right child that has a left child
                if (currentNode.right.left !== null) {
                    //Find the right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }

            //Element not found
            return false;
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
console.log(tree.lookup(9));

tree.remove(9);
console.log(tree.lookup(9));