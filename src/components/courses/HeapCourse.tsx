const HeapCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Heaps</h2>
            <p className='text-lg text-white mb-4'>
                A heap is a specialized tree-based data structure that satisfies the heap property. In a max-heap, for every node, the value of the node is greater than or equal to the values of its children. In a min-heap, the value of the node is less than or equal to the values of its children. Heaps are commonly used to implement priority queues, heap sort, and in algorithms like Dijkstra’s shortest path and Prim’s minimum spanning tree.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Basic Concepts</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Heap Property:</strong> The key of each node is either greater than or equal to (in a max-heap) or less than or equal to (in a min-heap) the keys of its children.</li>
                <li><strong>Complete Binary Tree:</strong> A heap is always a complete binary tree, meaning all levels are fully filled except possibly the last level, which is filled from left to right.</li>
                <li><strong>Heap Operations:</strong> Insertion, deletion (usually of the root), and heapification.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Heap Operations</h3>

            <h4 className='text-lg font-bold text-white mb-2'>Insertion</h4>
            <p className='text-lg text-white mb-4'>
                Inserting a new element into a heap involves adding the element at the end of the heap (maintaining the complete binary tree property) and then performing a “heapify-up” operation to restore the heap property.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function insert(heap, value) {
    heap.push(value);
    let index = heap.length - 1;
    while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (heap[index] <= heap[parent]) break;
        [heap[index], heap[parent]] = [heap[parent], heap[index]];
        index = parent;
    }
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Deletion (Remove Max/Min)</h4>
            <p className='text-lg text-white mb-4'>
                Removing the root of a heap (which is the maximum in a max-heap or the minimum in a min-heap) involves replacing it with the last element and then performing a “heapify-down” operation to restore the heap property.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function removeRoot(heap) {
    if (heap.length === 0) return null;
    let root = heap[0];
    heap[0] = heap.pop();
    heapifyDown(heap, 0);
    return root;
}

function heapifyDown(heap, index) {
    let length = heap.length;
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < length && heap[left] > heap[largest]) {
        largest = left;
    }

    if (right < length && heap[right] > heap[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        heapifyDown(heap, largest);
    }
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Heapify</h4>
            <p className='text-lg text-white mb-4'>
                Heapify is the process of converting a given array into a heap. This can be done by applying heapify-down from the last non-leaf node up to the root.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function buildHeap(array) {
    let startIdx = Math.floor(array.length / 2) - 1;
    for (let i = startIdx; i >= 0; i--) {
        heapifyDown(array, i);
    }
}`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Heap Sort</h4>
            <p className='text-lg text-white mb-4'>
                Heap sort is a comparison-based sorting algorithm that utilizes a heap to sort elements. It involves building a heap from the input data, repeatedly removing the largest element from the heap, and then building a sorted array.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function heapSort(array) {
    buildHeap(array);
    let end = array.length - 1;
    while (end > 0) {
        [array[0], array[end]] = [array[end], array[0]];
        end--;
        heapifyDown(array, 0, end);
    }
}

function heapifyDown(heap, index, end) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left <= end && heap[left] > heap[largest]) {
        largest = left;
    }

    if (right <= end && heap[right] > heap[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        heapifyDown(heap, largest, end);
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Common Problems Using Heaps</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Priority Queue:</strong> A data structure that supports inserting elements with priorities and retrieving the element with the highest (or lowest) priority.</li>
                <li><strong>Median of a Stream:</strong> Finding the median of a stream of numbers efficiently using two heaps (max-heap and min-heap).</li>
                <li><strong>Kth Largest/Smallest Element:</strong> Finding the kth largest or smallest element in an array using a heap.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Priority Queue</h3>
            <p className='text-lg text-white mb-4'>
                A priority queue is an abstract data type that supports efficient priority-based operations. Heaps are often used to implement priority queues where elements are inserted with priorities, and the highest (or lowest) priority element is extracted.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        while (left < length) {
            if (this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
            left = 2 * index + 1;
            right = 2 * index + 2;
        }
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Complexity Analysis</h3>
            <p className='text-lg text-white mb-4'>
                The time complexity for heap operations is as follows:
                <ul className='text-lg text-white mb-6 list-disc pl-6'>
                    <li><strong>Insertion:</strong> O(log n)</li>
                    <li><strong>Deletion:</strong> O(log n)</li>
                    <li><strong>Heapify:</strong> O(n)</li>
                    <li><strong>Heap Sort:</strong> O(n log n)</li>
                </ul>
                The space complexity is O(n) for storing the heap elements.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Heaps are a versatile and efficient data structure used in a variety of applications such as priority queues, heap sort, and more. Understanding heaps and their operations is crucial for efficiently solving problems that involve dynamic data with priority or order constraints.
            </p>
        </div>
    );
};

export default HeapCourse;
