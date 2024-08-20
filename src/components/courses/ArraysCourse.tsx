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
		</div>
	);
};

export default ArraysCourse;
