const ArraysCourse = () => {
	return (
		<div className='p-6'>
			<h2 className='text-2xl font-bold text-white mb-4'>Introduction to Arrays</h2>
			<p className='text-lg text-white mb-4'>
				Arrays are a fundamental data structure in computer science with a wide range of applications. They are essential for various tasks including:
			</p>
			<ul className='text-lg text-white mb-6 list-disc pl-6'>
				<li><strong>Data Storage:</strong> Arrays hold data for subsequent processing.</li>
				<li><strong>Data Structures:</strong> Arrays are used to implement other data structures such as stacks and queues.</li>
				<li><strong>Data Representation:</strong> They represent data in tables and matrices.</li>
				<li><strong>Dynamic Structures:</strong> Arrays are foundational for creating dynamic data structures like linked lists and trees.</li>
			</ul>

			<h3 className='text-xl font-bold text-white mb-4'>Common Operations on Arrays</h3>
			<p className='text-lg text-white mb-4'>
				Arrays support several key operations, each serving a distinct purpose:
			</p>
			<ul className='text-lg text-white list-disc pl-6'>
				<li><strong>Traversal:</strong> This operation involves visiting each element in the array in a specific order, which could be sequential or reverse.</li>
				<li><strong>Insertion:</strong> This involves adding a new element at a specific index within the array.</li>
				<li><strong>Deletion:</strong> This operation entails removing an element from a particular index.</li>
				<li><strong>Searching:</strong> This operation is used to locate the index of a specific element in the array.</li>
			</ul>

			<h3 className='text-xl font-bold text-white mb-4'>Array Implementation in C++</h3>
			<p className='text-lg text-white mb-4'>
				Let's look at how arrays can be implemented and used in C++:
			</p>

			<h4 className='text-lg font-bold text-white mb-2'>1. Declaration and Initialization</h4>
			<p className='text-lg text-white mb-4'>
				Arrays in C++ can be declared and initialized in several ways:
			</p>
			<pre className='bg-dark-fill-3 p-4 mb-4 overflow-auto'>
				<code className='text-green-400'>
					{`int arr[5]; // Declaration of an array of size 5
arr[0] = 10; // Initializing the first element
int arr2[5] = {1, 2, 3, 4, 5}; // Declaration and initialization
`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>2. Traversal</h4>
			<p className='text-lg text-white mb-4'>
				Traversal refers to accessing each element of the array one by one:
			</p>
			<pre className='bg-dark-fill-3 p-4 mb-4 overflow-auto'>
				<code className='text-green-400'>
					{`for(int i = 0; i < 5; i++) {
    cout << arr2[i] << " ";
} // Output: 1 2 3 4 5
`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>3. Insertion</h4>
			<p className='text-lg text-white mb-4'>
				Insertion involves adding an element at a specific index:
			</p>
			<pre className='bg-dark-fill-3 p-4 mb-4 overflow-auto'>
				<code className='text-green-400'>
					{`int arr[6] = {1, 2, 4, 5, 6};
int pos = 2, newElement = 3;
for(int i = 5; i > pos; i--) {
    arr[i] = arr[i-1];
}
arr[pos] = newElement;
// Array after insertion: 1 2 3 4 5 6
`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>4. Deletion</h4>
			<p className='text-lg text-white mb-4'>
				Deletion involves removing an element from a specific index:
			</p>
			<pre className='bg-dark-fill-3 p-4 mb-4 overflow-auto'>
				<code className='text-green-400'>
					{`int arr[6] = {1, 2, 3, 4, 5, 6};
int pos = 2;
for(int i = pos; i < 5; i++) {
    arr[i] = arr[i+1];
}
// Array after deletion: 1 2 4 5 6
`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>5. Searching</h4>
			<p className='text-lg text-white mb-4'>
				Searching for an element in an array returns its index:
			</p>
			<pre className='bg-dark-fill-3 p-4 mb-4 overflow-auto'>
				<code className='text-green-400'>
					{`int arr[5] = {1, 2, 3, 4, 5};
int searchElement = 4;
for(int i = 0; i < 5; i++) {
    if(arr[i] == searchElement) {
        cout << "Element found at index " << i << endl;
        break;
    }
} // Output: Element found at index 3
`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>6. Example: Reversing an Array</h4>
			<p className='text-lg text-white mb-4'>
				Here’s an example of reversing an array:
			</p>
			<pre className='bg-dark-fill-3 p-4 mb-4 overflow-auto'>
				<code className='text-green-400'>
					{`int arr[5] = {1, 2, 3, 4, 5};
int start = 0, end = 4;
while(start < end) {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
// Array after reversing: 5 4 3 2 1
`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>7. Conclusion</h4>
			<p className='text-lg text-white mb-4'>
				Arrays are a versatile and powerful data structure that serves as the building block for many complex algorithms and data structures. Mastering arrays will provide you with a strong foundation in data structures and algorithms.
			</p>
		</div>
	);
};

export default ArraysCourse;
