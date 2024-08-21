const TwoPointersCourse = () => {
	return (
		<div className='p-6'>
			<h2 className='text-2xl font-bold text-white mb-4'>Introduction to Two Pointers Technique</h2>
			<p className='text-lg text-white mb-4'>
				The Two Pointers technique is a powerful and efficient method commonly used to solve problems involving arrays or lists. It involves using two pointers to iterate through the data structure from different directions (e.g., one pointer starting from the beginning and the other from the end) to accomplish tasks like finding pairs, reversing arrays, or partitioning data.
			</p>
			
			<h3 className='text-xl font-bold text-white mb-4'>Common Use Cases</h3>
			<p className='text-lg text-white mb-4'>
				The Two Pointers technique can be applied to various types of problems, including:
			</p>
			<ul className='text-lg text-white list-disc pl-6 mb-6'>
				<li><strong>Finding Pairs:</strong> Identify pairs of elements that satisfy a given condition (e.g., sum of two numbers equals a target value).</li>
				<li><strong>Partitioning:</strong> Separate elements into two groups based on a condition (e.g., all negative numbers on one side and positive on the other).</li>
				<li><strong>Reversing Arrays:</strong> Reverse the elements of an array in-place.</li>
				<li><strong>Removing Duplicates:</strong> Modify the array in-place to remove duplicates.</li>
			</ul>

			<h3 className='text-xl font-bold text-white mb-4'>Two Pointers Implementation in C++</h3>
			<p className='text-lg text-white mb-4'>
				Let's explore how the Two Pointers technique can be implemented in C++:
			</p>

			<h4 className='text-lg font-bold text-white mb-2'>1. Finding a Pair with a Given Sum</h4>
			<p className='text-lg text-white mb-4'>
				One of the classic problems solved by the Two Pointers technique is finding a pair of elements in a sorted array that add up to a specific target sum:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`int arr[] = {1, 2, 3, 4, 6};
int target = 6;
int left = 0, right = 4;
while(left < right) {
    int sum = arr[left] + arr[right];
    if(sum == target) {
        cout << "Pair found: (" << arr[left] << ", " << arr[right] << ")" << endl;
        break;
    } else if(sum < target) {
        left++;
    } else {
        right--;
    }
}
// Output: Pair found: (2, 4)`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>2. Removing Duplicates from a Sorted Array</h4>
			<p className='text-lg text-white mb-4'>
				Another common application is removing duplicates from a sorted array in-place:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`int arr[] = {1, 1, 2, 2, 3, 4, 4};
int n = sizeof(arr)/sizeof(arr[0]);
int left = 0;
for(int right = 1; right < n; right++) {
    if(arr[right] != arr[left]) {
        left++;
        arr[left] = arr[right];
    }
}
for(int i = 0; i <= left; i++) {
    cout << arr[i] << " ";
}
// Output: 1 2 3 4`}
				</code>
			</pre>

			<h4 className='text-lg font-bold text-white mb-2'>3. Partitioning an Array</h4>
			<p className='text-lg text-white mb-4'>
				Partitioning an array into two sections (e.g., negative and positive numbers) can also be done efficiently using the Two Pointers technique:
			</p>
			<pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
				<code>
					{`int arr[] = {-12, 11, -13, -5, 6, -7, 5, -3, -6};
int left = 0, right = sizeof(arr)/sizeof(arr[0]) - 1;
while(left < right) {
    if(arr[left] < 0) {
        left++;
    } else if(arr[right] >= 0) {
        right--;
    } else {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}
for(int i = 0; i <= right; i++) {
    cout << arr[i] << " ";
}
// Output: -12 -3 -13 -5 -6 -7 5 11 6`}
				</code>
			</pre>

			<h3 className='text-xl font-bold text-white mb-4'>Sample DSA Coding Questions</h3>
			<p className='text-lg text-white mb-4'>
				The Two Pointers technique is widely applicable in various coding problems. Here are some sample questions you can practice:
			</p>
			<ul className='text-lg text-white list-disc pl-6'>
				<li><strong>Two Sum II:</strong> Given a sorted array, find two numbers such that they add up to a specific target number.</li>
				<li><strong>Container With Most Water:</strong> Find two lines on a graph that together with the x-axis forms a container, such that the container contains the most water.</li>
				<li><strong>3Sum:</strong> Find all unique triplets in the array which gives the sum of zero.</li>
				<li><strong>Sort Colors:</strong> Sort an array with elements being 0, 1, and 2 using the Dutch National Flag problem solution.</li>
			</ul>

			<h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
			<p className='text-lg text-white mb-4'>
				The Two Pointers technique is a versatile and essential tool in a programmer's toolkit. It provides an efficient way to solve problems that involve searching, partitioning, or manipulating data within arrays or lists. Mastering this technique will significantly improve your problem-solving skills in competitive programming and coding interviews.
			</p>
		</div>
	);
};

export default TwoPointersCourse;
