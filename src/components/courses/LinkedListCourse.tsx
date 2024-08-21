const LinkedListCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Linked Lists</h2>
            <p className='text-lg text-white mb-4'>
                A linked list is a fundamental data structure where elements are stored in a linear order. Unlike arrays, where elements are indexed, linked lists use pointers to establish the order of elements. Each element, called a node, contains a key and pointers to other nodes, enabling dynamic memory allocation and efficient insertions and deletions.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Types of Linked Lists</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Singly Linked List:</strong> Each node has a pointer to the next node.</li>
                <li><strong>Doubly Linked List:</strong> Each node has pointers to both the next and the previous node.</li>
                <li><strong>Circular Linked List:</strong> The last node points back to the first node, creating a circular structure.</li>
                <li><strong>Sorted vs. Unsorted:</strong> In sorted linked lists, nodes are ordered by their keys. In unsorted linked lists, nodes can be in any order.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Doubly Linked List Structure</h3>
            <p className='text-lg text-white mb-4'>
                In a doubly linked list, each node contains:
            </p>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Key:</strong> The value stored in the node.</li>
                <li><strong>Next Pointer:</strong> Points to the next node in the list.</li>
                <li><strong>Prev Pointer:</strong> Points to the previous node in the list.</li>
            </ul>
            <p className='text-lg text-white mb-4'>
                The head of the list points to the first element, while the tail points to the last element. If a node's next pointer is NIL, it's the last node; if its prev pointer is NIL, it's the first node.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Searching a Linked List</h3>
            <p className='text-lg text-white mb-4'>
                To find an element with a specific key in a linked list, perform a linear search from the head of the list. This approach has a worst-case time complexity of Θ(n), where n is the number of nodes in the list.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`LIST-SEARCH(L, k) {
    x = L.head
    while x ≠ NIL and x.key ≠ k
        x = x.next
    return x
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Inserting into a Linked List</h3>
            <p className='text-lg text-white mb-4'>
                To insert a node at the beginning of the list:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`LIST-PREPEND(L, x) {
    x.next = L.head
    x.prev = NIL
    if L.head ≠ NIL
        L.head.prev = x
    L.head = x
}`}
                </code>
            </pre>
            <p className='text-lg text-white mb-4'>
                To insert a node x after a node y:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`LIST-INSERT(x, y) {
    x.next = y.next
    x.prev = y
    if y.next ≠ NIL
        y.next.prev = x
    y.next = x
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Deleting from a Linked List</h3>
            <p className='text-lg text-white mb-4'>
                To delete a node x from the list:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`LIST-DELETE(L, x) {
    if x.prev ≠ NIL
        x.prev.next = x.next
    else
        L.head = x.next
    if x.next ≠ NIL
        x.next.prev = x.prev
}`}
                </code>
            </pre>
            <p className='text-lg text-white mb-4'>
                Deleting an element requires first locating it with a search operation, which makes the combined time complexity Θ(n) in the worst case.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Comparing Linked Lists and Arrays</h3>
            <p className='text-lg text-white mb-4'>
                Insertion and deletion operations in linked lists are generally more efficient than in arrays, with O(1) time complexity for these operations. Arrays require Θ(n) time for these operations due to the need to shift elements. However, accessing an element by index in an array is O(1), whereas in a linked list, it takes Θ(k) time to traverse to the kth element.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Sentinels</h3>
            <p className='text-lg text-white mb-4'>
                Sentinels are special dummy nodes used to simplify boundary conditions in linked lists. They can help avoid handling edge cases where the list is empty or has only one element, by providing a non-NIL reference that represents the start or end of the list.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Linked List Reversal</h3>
            <p className='text-lg text-white mb-4'>
                Reverse a doubly linked list. This operation involves swapping the next and prev pointers of each node:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`void reverseDoublyLinkedList(DoublyLinkedList L) {
    Node* current = L.head;
    Node* temp = NULL;
    while (current ≠ NIL) {
        temp = current.next;
        current.next = current.prev;
        current.prev = temp;
        current = temp;
    }
    if (temp ≠ NIL) {
        L.head = temp.prev;
    }
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Linked lists are a versatile and dynamic data structure that supports efficient insertion and deletion operations. Understanding their structure and operations is crucial for solving various algorithmic problems and for optimizing performance in many applications.
            </p>
        </div>
    );
};

export default LinkedListCourse;
