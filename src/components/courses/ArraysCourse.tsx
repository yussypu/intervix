const ArraysCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Comprehensive Course on Arrays</h2>
            
            {/* Introduction Section */}
            <section className='mb-8'>
                <h3 className='text-xl font-bold text-white mb-4'>Introduction to Arrays</h3>
                <p className='text-lg text-white mb-4'>
                    Arrays are a crucial data structure in computer science, allowing the storage of multiple elements under a single variable name. They are a cornerstone in algorithm design and are widely used across various applications.
                </p>
                <p className='text-lg text-white mb-4'>
                    This course will cover both the theoretical aspects and practical implementations of arrays, focusing on the following key areas:
                </p>
                <ul className='text-lg text-white mb-6 list-disc pl-6'>
                    <li><strong>Data Storage:</strong> Arrays efficiently store data in contiguous memory locations.</li>
                    <li><strong>Data Structures:</strong> Arrays form the basis for more complex structures like stacks, queues, and matrices.</li>
                    <li><strong>Data Representation:</strong> Arrays are essential for representing tabular data and multi-dimensional structures.</li>
                    <li><strong>Dynamic Structures:</strong> Arrays are foundational for dynamic structures like linked lists and trees.</li>
                </ul>
            </section>

            {/* Theoretical Foundations Section */}
            <section className='mb-8'>
                <h3 className='text-xl font-bold text-white mb-4'>Theoretical Foundations</h3>
                <p className='text-lg text-white mb-4'>
                    Arrays are a fixed-size, sequential collection of elements of the same type. Understanding the theory behind arrays is critical for effective implementation and optimization of algorithms.
                </p>
                <h4 className='text-lg font-bold text-white mb-4'>1. Array Declaration and Initialization</h4>
                <p className='text-lg text-white mb-4'>
                    In C++, arrays are declared using the following syntax:
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`int arr[5]; // Declares an array of 5 integers
arr[0] = 10; // Initializes the first element
arr[1] = 20; // Initializes the second element`}
                </pre>
                <p className='text-lg text-white mb-4'>
                    Arrays can also be initialized at the time of declaration:
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`int arr[5] = {10, 20, 30, 40, 50}; // Declares and initializes an array of 5 integers`}
                </pre>
                <h4 className='text-lg font-bold text-white mb-4'>2. Memory Allocation</h4>
                <p className='text-lg text-white mb-4'>
                    Arrays in C++ are allocated in a contiguous block of memory. This means that the elements of the array are stored next to each other, which allows for efficient access and manipulation.
                </p>
                <p className='text-lg text-white mb-4'>
                    The size of the array must be known at compile time if it is a static array, as this determines the amount of memory to be allocated.
                </p>
            </section>

            {/* Common Operations Section */}
            <section className='mb-8'>
                <h3 className='text-xl font-bold text-white mb-4'>Common Operations on Arrays</h3>
                <p className='text-lg text-white mb-4'>
                    Arrays support a variety of operations, each essential for different programming tasks. Understanding these operations is crucial for effective problem-solving in algorithms.
                </p>
                <h4 className='text-lg font-bold text-white mb-4'>1. Traversal</h4>
                <p className='text-lg text-white mb-4'>
                    Traversal involves visiting each element in the array. It is often used in searching, sorting, and other array operations.
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`// Example of traversal in C++
for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}`}</pre>

                <h4 className='text-lg font-bold text-white mb-4'>2. Insertion</h4>
                <p className='text-lg text-white mb-4'>
                    Insertion refers to adding an element at a specific position in the array. Depending on the position, this operation may require shifting elements to maintain the order.
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`// Example of insertion at index 2
int arr[6] = {10, 20, 30, 40, 50};
int n = 5; // Number of elements in the array
int x = 25;
int pos = 2;

for (int i = n; i > pos; i--) {
    arr[i] = arr[i - 1];
}
arr[pos] = x;
n++;

for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}`}</pre>

                <h4 className='text-lg font-bold text-white mb-4'>3. Deletion</h4>
                <p className='text-lg text-white mb-4'>
                    Deletion involves removing an element from the array. After removal, elements may need to be shifted to fill the gap.
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`// Example of deletion from index 2
int arr[5] = {10, 20, 30, 40, 50};
int n = 5; // Number of elements in the array
int pos = 2;

for (int i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
}
n--;

for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}`}</pre>

                <h4 className='text-lg font-bold text-white mb-4'>4. Searching</h4>
                <p className='text-lg text-white mb-4'>
                    Searching is used to find the index of a specific element in the array. There are several methods for searching, including linear and binary search.
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`// Example of linear search
int searchElement = 30;
int index = -1;
for (int i = 0; i < n; i++) {
    if (arr[i] == searchElement) {
        index = i;
        break;
    }
}
cout << "Element found at index: " << index;`}
                </pre>
            </section>

            {/* Advanced Topics Section */}
            <section className='mb-8'>
                <h3 className='text-xl font-bold text-white mb-4'>Advanced Topics</h3>
                <p className='text-lg text-white mb-4'>
                    In this section, we will explore more advanced topics related to arrays, including multi-dimensional arrays, dynamic arrays, and optimization techniques.
                </p>

                <h4 className='text-lg font-bold text-white mb-4'>1. Multi-Dimensional Arrays</h4>
                <p className='text-lg text-white mb-4'>
                    Multi-dimensional arrays are arrays of arrays. They are used to represent data in more than one dimension, such as matrices or grids.
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`// Example of a 2D array (matrix)
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
cout << matrix[0][0] << endl; // Outputs: 1
cout << matrix[2][2] << endl; // Outputs: 9`}
                </pre>

                <h4 className='text-lg font-bold text-white mb-4'>2. Dynamic Arrays</h4>
                <p className='text-lg text-white mb-4'>
                    Dynamic arrays (such as vectors in C++) can change size during runtime. They allow more flexibility compared to static arrays.
                </p>
                <pre className='bg-dark-fill-2 p-4 rounded mb-6 text-white'>
{`#include <vector>

vector<int> dynamicArray;
dynamicArray.push_back(10);
dynamicArray.push_back(20);

// Iterating through the dynamic array
for (int i = 0; i < dynamicArray.size(); i++) {
    cout << dynamicArray[i] << " ";
}`}
                </pre>
            </section>

            {/* Conclusion Section */}
            <section className='mb-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
