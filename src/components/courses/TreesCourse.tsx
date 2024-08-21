const TreesCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Trees</h2>
            <p className='text-lg text-white mb-4'>
                Trees are a fundamental data structure in computer science, representing hierarchical relationships. They consist of nodes connected by edges, where each node may have zero or more child nodes. Trees are used in various applications, including file systems, databases, and network routing.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Basic Terminology</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Node:</strong> The fundamental unit of a tree. Each node contains a value and pointers to its children.</li>
                <li><strong>Root:</strong> The topmost node of the tree. It has no parent.</li>
                <li><strong>Leaf:</strong> A node with no children. Also called an external node.</li>
                <li><strong>Internal Node:</strong> A node with at least one child.</li>
                <li><strong>Edge:</strong> The connection between two nodes.</li>
                <li><strong>Path:</strong> A sequence of nodes and edges connecting a node to another node.</li>
                <li><strong>Height:</strong> The length of the longest path from a node to a leaf.</li>
                <li><strong>Depth:</strong> The length of the path from the root to a node.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Types of Trees</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Binary Tree:</strong> Each node has at most two children (left and right). It's the simplest form of a tree.</li>
                <li><strong>Binary Search Tree (BST):</strong> A binary tree where for each node, the left child contains values less than the node, and the right child contains values greater than the node.</li>
                <li><strong>Balanced Tree:</strong> A tree where the height of the left and right subtrees of any node differ by no more than one (e.g., AVL Tree, Red-Black Tree).</li>
                <li><strong>Heap:</strong> A complete binary tree where each node follows the heap property (max-heap or min-heap).</li>
                <li><strong>Trie:</strong> A tree-like data structure used for efficient retrieval of keys in a dataset of strings.</li>
                <li><strong>Segment Tree:</strong> A tree used for storing intervals or segments, allowing querying and updating of range-based data efficiently.</li>
                <li><strong>Tree Traversal:</strong> Methods for visiting all nodes in a tree (e.g., in-order, pre-order, post-order traversal).</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Binary Tree Operations</h3>
            <h4 className='text-lg font-semibold text-white mb-2'>Insertion</h4>
            <p className='text-lg text-white mb-4'>
                Inserting a node into a binary tree typically involves finding the correct position in the tree and placing the new node there. In a binary search tree, you insert the node such that the tree maintains the binary search property.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function insert(root, value) {
    if (root === null) {
        return new TreeNode(value);
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else {
        root.right = insert(root.right, value);
    }

    return root;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-semibold text-white mb-2'>Deletion</h4>
            <p className='text-lg text-white mb-4'>
                Deleting a node from a binary tree involves finding the node and then rearranging the tree to maintain its properties. In a binary search tree, special care is taken to ensure that the binary search property is preserved.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function deleteNode(root, key) {
    if (root === null) {
        return root;
    }

    if (key < root.value) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.value) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        let minNode = findMin(root.right);
        root.value = minNode.value;
        root.right = deleteNode(root.right, minNode.value);
    }

    return root;
}

function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-semibold text-white mb-2'>Traversal</h4>
            <p className='text-lg text-white mb-4'>
                Tree traversal refers to visiting all nodes in a specific order. The most common traversal methods are in-order, pre-order, and post-order.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function inorderTraversal(root, result = []) {
    if (root !== null) {
        inorderTraversal(root.left, result);
        result.push(root.value);
        inorderTraversal(root.right, result);
    }
    return result;
}

function preorderTraversal(root, result = []) {
    if (root !== null) {
        result.push(root.value);
        preorderTraversal(root.left, result);
        preorderTraversal(root.right, result);
    }
    return result;
}

function postorderTraversal(root, result = []) {
    if (root !== null) {
        postorderTraversal(root.left, result);
        postorderTraversal(root.right, result);
        result.push(root.value);
    }
    return result;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Binary Search Tree (BST)</h3>
            <p className='text-lg text-white mb-4'>
                A Binary Search Tree (BST) is a binary tree where each node follows the BST property: left child values are less than the node’s value, and right child values are greater. This property enables efficient searching, insertion, and deletion operations.
            </p>
            <h4 className='text-lg font-semibold text-white mb-2'>Search Operation</h4>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function searchBST(root, key) {
    if (root === null || root.value === key) {
        return root;
    }

    if (key < root.value) {
        return searchBST(root.left, key);
    } else {
        return searchBST(root.right, key);
    }
}`}
                </code>
            </pre>

            <h4 className='text-lg font-semibold text-white mb-2'>Find Minimum and Maximum</h4>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function findMinBST(root) {
    while (root.left !== null) {
        root = root.left;
    }
    return root;
}

function findMaxBST(root) {
    while (root.right !== null) {
        root = root.right;
    }
    return root;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Balanced Trees</h3>
            <p className='text-lg text-white mb-4'>
                Balanced trees ensure that the tree remains balanced to provide efficient operations. Examples include AVL Trees and Red-Black Trees.
            </p>
            <h4 className='text-lg font-semibold text-white mb-2'>AVL Tree</h4>
            <p className='text-lg text-white mb-4'>
                An AVL Tree is a self-balancing binary search tree where the height difference between left and right subtrees of any node is at most one. Rotations are used to maintain balance.
            </p>
            <h4 className='text-lg font-semibold text-white mb-2'>Red-Black Tree</h4>
            <p className='text-lg text-white mb-4'>
                A Red-Black Tree is a self-balancing binary search tree with additional properties to ensure balance, such as color attributes and rules for maintaining tree height.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Trie (Prefix Tree)</h3>
            <p className='text-lg text-white mb-4'>
                A Trie is a tree-like data structure used for storing a dynamic set of strings, where keys are usually strings. It’s particularly useful for implementing autocomplete systems and dictionary lookups.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Segment Tree</h3>
            <p className='text-lg text-white mb-4'>
                A Segment Tree is used for storing intervals or segments and allows querying and updating of range-based data efficiently. It’s used in scenarios where you need to perform range queries and updates, such as finding the sum or minimum of a segment.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n);
        this.build(arr, 0, 0, this.n - 1);
    }

    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            let mid = Math.floor((start + end) / 2);
            this.build(arr, 2 * node + 1, start, mid);
            this.build(arr, 2 * node + 2, mid + 1, end);
            this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
        }
    }

    rangeQuery(L, R, node = 0, start = 0, end = this.n - 1) {
        if (L > end || R < start) {
            return Infinity;
        }
        if (L <= start && end <= R) {
            return this.tree[node];
        }
        let mid = Math.floor((start + end) / 2);
        let leftQuery = this.rangeQuery(L, R, 2 * node + 1, start, mid);
        let rightQuery = this.rangeQuery(L, R, 2 * node + 2, mid + 1, end);
        return Math.min(leftQuery, rightQuery);
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Applications of Trees</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Hierarchical Data Representation:</strong> File systems, organizational structures.</li>
                <li><strong>Database Indexing:</strong> B-Trees, B+ Trees for efficient data retrieval.</li>
                <li><strong>Search and Retrieval:</strong> Efficient search operations using binary search trees, tries, and segment trees.</li>
                <li><strong>Dynamic Programming:</strong> Tree-based dynamic programming problems (e.g., binary tree problems, segment tree applications).</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Complexity Analysis</h3>
            <p className='text-lg text-white mb-4'>
                The time complexity of various operations on trees depends on the type of tree and its balance. For binary search trees, average time complexity for search, insertion, and deletion is O(log n), but it can degrade to O(n) if the tree becomes unbalanced. Balanced trees like AVL and Red-Black Trees guarantee O(log n) complexity for these operations. Tries and Segment Trees offer efficient querying and updating with time complexity depending on the tree height and the size of the input.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Binary Tree Level Order Traversal</h3>
            <p className='text-lg text-white mb-4'>
                Given a binary tree, return its level order traversal as a list of lists where each list contains nodes at that level.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function levelOrderTraversal(root) {
    if (root === null) return [];
    
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        let level = [];
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            level.push(node.value);
            
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        
        result.push(level);
    }
    
    return result;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Trees are a versatile and essential data structure with numerous applications in computer science. Understanding different types of trees, their properties, and operations will help in solving various computational problems efficiently. Mastery of tree structures and their algorithms is crucial for effective problem-solving and optimization.
            </p>
        </div>
    );
};

export default TreesCourse;
