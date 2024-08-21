const GraphsCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Graphs</h2>
            <p className='text-lg text-white mb-4'>
                A graph is a data structure that consists of a set of nodes (or vertices) connected by edges. Graphs are used to model relationships and connections in various applications, from social networks to routing algorithms. They can be categorized based on various properties such as directed or undirected, weighted or unweighted, and cyclic or acyclic.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Basic Concepts</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Vertex (Node):</strong> The fundamental unit of a graph, representing an entity or a point.</li>
                <li><strong>Edge (Link):</strong> A connection between two vertices in the graph.</li>
                <li><strong>Degree:</strong> The number of edges connected to a vertex.</li>
                <li><strong>Path:</strong> A sequence of vertices where each consecutive pair is connected by an edge.</li>
                <li><strong>Cycle:</strong> A path that starts and ends at the same vertex.</li>
                <li><strong>Connected Graph:</strong> A graph where there is a path between every pair of vertices.</li>
                <li><strong>Disjoint Set:</strong> A graph where some vertices are not connected by any path.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Types of Graphs</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Directed Graph (Digraph):</strong> A graph where edges have a direction from one vertex to another.</li>
                <li><strong>Undirected Graph:</strong> A graph where edges do not have a direction; the connection is bidirectional.</li>
                <li><strong>Weighted Graph:</strong> A graph where edges have weights representing costs or distances.</li>
                <li><strong>Unweighted Graph:</strong> A graph where all edges are considered equal (no weights).</li>
                <li><strong>Cyclic Graph:</strong> A graph that contains at least one cycle.</li>
                <li><strong>Acyclic Graph:</strong> A graph that does not contain any cycles.</li>
                <li><strong>Tree:</strong> A connected acyclic graph. A special type of graph where there is exactly one path between any two vertices.</li>
                <li><strong>Forest:</strong> A disjoint set of trees.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Graph Representation</h3>
            <p className='text-lg text-white mb-4'>
                Graphs can be represented in several ways, each with its own advantages and use cases:
            </p>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Adjacency Matrix:</strong> A 2D array where the cell at row i and column j indicates whether there is an edge between vertex i and vertex j. This representation is useful for dense graphs.</li>
            </ul>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`const adjacencyMatrix = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];`}
                </code>
            </pre>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Adjacency List:</strong> An array where each index represents a vertex and contains a list of all adjacent vertices. This representation is more space-efficient for sparse graphs.</li>
            </ul>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`const adjacencyList = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
};`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Graph Algorithms</h3>

            <h4 className='text-lg font-bold text-white mb-2'>Depth-First Search (DFS)</h4>
            <p className='text-lg text-white mb-4'>
                DFS is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary vertex) and explores as far as possible along each branch before backtracking.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function dfs(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    visited.add(start);
    console.log(start);
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Breadth-First Search (BFS)</h4>
            <p className='text-lg text-white mb-4'>
                BFS is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary vertex) and explores all neighbors at the present depth level before moving on to nodes at the next depth level.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        let vertex = queue.shift();
        console.log(vertex);
        for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Dijkstra's Algorithm</h4>
            <p className='text-lg text-white mb-4'>
                Dijkstra's Algorithm is used to find the shortest path from a starting node to all other nodes in a weighted graph with non-negative weights.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function dijkstra(graph, start) {
    let distances = {};
    let priorityQueue = new MinPriorityQueue();
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    while (!priorityQueue.isEmpty()) {
        let {element: vertex} = priorityQueue.dequeue();
        for (const [neighbor, weight] of graph[vertex]) {
            let distance = distances[vertex] + weight;
            if (distance < (distances[neighbor] || Infinity)) {
                distances[neighbor] = distance;
                priorityQueue.enqueue(neighbor, distance);
            }
        }
    }
    return distances;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Bellman-Ford Algorithm</h4>
            <p className='text-lg text-white mb-4'>
                The Bellman-Ford Algorithm computes the shortest path from a single source vertex to all other vertices in a graph that may contain negative weight edges. It can also detect negative weight cycles.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function bellmanFord(graph, start) {
    let distances = {};
    let edges = [];

    for (let u in graph) {
        distances[u] = Infinity;
        for (const [v, weight] of graph[u]) {
            edges.push([u, v, weight]);
        }
    }
    distances[start] = 0;

    for (let i = 1; i < Object.keys(graph).length; i++) {
        for (const [u, v, weight] of edges) {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    for (const [u, v, weight] of edges) {
        if (distances[u] + weight < distances[v]) {
            throw new Error('Graph contains a negative weight cycle');
        }
    }

    return distances;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Kruskal's Algorithm</h4>
            <p className='text-lg text-white mb-4'>
                Kruskal's Algorithm finds the Minimum Spanning Tree (MST) for a graph, which is a subset of edges that connects all vertices with the minimum total edge weight.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function kruskal(vertices, edges) {
    let mst = [];
    let parent = {};
    let rank = {};

    function find(v) {
        if (parent[v] !== v) {
            parent[v] = find(parent[v]);
        }
        return parent[v];
    }

    function union(v1, v2) {
        let root1 = find(v1);
        let root2 = find(v2);
        if (root1 !== root2) {
            if (rank[root1] > rank[root2]) {
                parent[root2] = root1;
            } else if (rank[root1] < rank[root2]) {
                parent[root1] = root2;
            } else {
                parent[root2] = root1;
                rank[root1]++;
            }
        }
    }

    for (let v of vertices) {
        parent[v] = v;
        rank[v] = 0;
    }

    edges.sort((a, b) => a.weight - b.weight);

    for (let edge of edges) {
        let {u, v, weight} = edge;
        if (find(u) !== find(v)) {
            mst.push(edge);
            union(u, v);
        }
    }

    return mst;
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Prim's Algorithm</h4>
            <p className='text-lg text-white mb-4'>
                Prim's Algorithm finds the Minimum Spanning Tree (MST) for a graph. It starts with a single vertex and grows the MST by adding the smallest edge connecting a vertex in the MST to a vertex outside it.
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

            <h3 className='text-xl font-bold text-white mb-4'>Applications of Graphs</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Social Networks:</strong> Modeling users and their relationships.</li>
                <li><strong>Routing Algorithms:</strong> Finding shortest paths in network routing.</li>
                <li><strong>Recommendation Systems:</strong> Suggesting products or connections based on user interactions.</li>
                <li><strong>Scheduling:</strong> Optimizing task scheduling and resource allocation.</li>
                <li><strong>Mapping and Navigation:</strong> Representing geographical data for navigation systems.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Understanding graphs and their algorithms is crucial for solving a wide range of problems in computer science and related fields. Mastery of graph concepts and techniques can lead to more efficient and effective solutions in various real-world applications.
            </p>
        </div>
    );
};

export default GraphsCourse;
