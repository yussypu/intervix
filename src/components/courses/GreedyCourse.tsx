const GreedyAlgorithmsCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Greedy Algorithms</h2>
            <p className='text-lg text-white mb-4'>
                Greedy algorithms are a class of algorithms that build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. They are used to solve optimization problems where a locally optimal choice leads to a globally optimal solution. However, not all problems can be solved using greedy algorithms, as they are not always guaranteed to produce the optimal solution.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Basic Concepts</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Greedy Choice Property:</strong> A global optimum can be arrived at by selecting a local optimum.</li>
                <li><strong>Optimal Substructure:</strong> An optimal solution to the problem contains optimal solutions to subproblems.</li>
                <li><strong>Feasible Solution:</strong> A solution that meets all the constraints of the problem.</li>
                <li><strong>Locally Optimal Choice:</strong> The choice that looks the best at the moment.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Greedy Algorithms Paradigm</h3>
            <p className='text-lg text-white mb-4'>
                Greedy algorithms follow a specific paradigm to find solutions:
            </p>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Initialization:</strong> Start with an empty solution set.</li>
                <li><strong>Selection:</strong> Select the best option according to a specific criterion.</li>
                <li><strong>Feasibility Check:</strong> Ensure that the selected option does not violate any constraints.</li>
                <li><strong>Inclusion:</strong> Add the selected option to the solution set.</li>
                <li><strong>Termination:</strong> Repeat the process until the solution is complete or no more options are available.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Key Greedy Algorithms</h3>

            <h4 className='text-lg font-bold text-white mb-2'>Fractional Knapsack Problem</h4>
            <p className='text-lg text-white mb-4'>
                In the Fractional Knapsack Problem, you are given a set of items, each with a weight and a value, and a knapsack with a weight capacity. You can take fractions of items to maximize the total value in the knapsack. The greedy strategy is to take items with the highest value-to-weight ratio first.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function fractionalKnapsack(weights, values, capacity) {
    let n = weights.length;
    let items = [];
    for (let i = 0; i < n; i++) {
        items.push({index: i, value: values[i], weight: weights[i], ratio: values[i] / weights[i]});
    }

    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    for (let item of items) {
        if (capacity <= 0) break;
        let weight = Math.min(item.weight, capacity);
        totalValue += weight * item.ratio;
        capacity -= weight;
    }

    return totalValue;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Activity Selection Problem</h4>
            <p className='text-lg text-white mb-4'>
                In the Activity Selection Problem, you have a set of activities with start and end times. You need to select the maximum number of activities that do not overlap. The greedy approach is to always select the activity that finishes the earliest.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function activitySelection(activities) {
    activities.sort((a, b) => a.end - b.end);

    let result = [];
    let lastEndTime = -1;
    for (let activity of activities) {
        if (activity.start > lastEndTime) {
            result.push(activity);
            lastEndTime = activity.end;
        }
    }

    return result;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Huffman Coding</h4>
            <p className='text-lg text-white mb-4'>
                Huffman Coding is a lossless data compression algorithm. It assigns variable-length codes to input characters, with shorter codes assigned to more frequent characters. The greedy approach builds a binary tree where each leaf node represents a character and its frequency.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`class Node {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function buildHuffmanTree(frequencies) {
    let nodes = Object.keys(frequencies).map(char => new Node(char, frequencies[char]));

    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        let left = nodes.shift();
        let right = nodes.shift();
        let newNode = new Node(null, left.freq + right.freq);
        newNode.left = left;
        newNode.right = right;
        nodes.push(newNode);
    }

    return nodes[0];
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Prim's Algorithm for Minimum Spanning Tree</h4>
            <p className='text-lg text-white mb-4'>
                Prim's Algorithm finds the Minimum Spanning Tree (MST) for a graph. Starting from an arbitrary vertex, it grows the MST by adding the smallest edge that connects a vertex in the MST to a vertex outside it.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function prim(graph, start) {
    let mst = [];
    let visited = new Set();
    let minHeap = new MinPriorityQueue();
    minHeap.enqueue(start, 0);

    while (!minHeap.isEmpty()) {
        let {element: vertex, priority} = minHeap.dequeue();
        if (visited.has(vertex)) continue;
        visited.add(vertex);
        for (const [neighbor, weight] of graph[vertex]) {
            if (!visited.has(neighbor)) {
                minHeap.enqueue(neighbor, weight);
                mst.push({from: vertex, to: neighbor, weight});
            }
        }
    }

    return mst;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Applications of Greedy Algorithms</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Resource Allocation:</strong> Allocating resources to maximize benefits, such as job scheduling or bandwidth allocation.</li>
                <li><strong>Network Design:</strong> Designing efficient communication networks by minimizing costs or maximizing coverage.</li>
                <li><strong>Data Compression:</strong> Techniques like Huffman Coding for lossless data compression.</li>
                <li><strong>Scheduling:</strong> Optimizing task scheduling to maximize throughput or minimize completion time.</li>
                <li><strong>Routing:</strong> Finding efficient paths in network routing problems.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Greedy algorithms are powerful tools for solving optimization problems where making the locally optimal choice leads to a globally optimal solution. Mastery of greedy techniques can lead to more efficient solutions in various real-world scenarios.
            </p>
        </div>
    );
};

export default GreedyAlgorithmsCourse;
