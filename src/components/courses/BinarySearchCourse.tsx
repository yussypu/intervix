const BinarySearchCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Binary Search</h2>
            <p className='text-lg text-white mb-4'>
                Binary Search is a fundamental algorithm in computer science, used to efficiently find a target value within a sorted array or list. Unlike linear search, which checks each element sequentially, binary search repeatedly divides the search interval in half, significantly reducing the time complexity to O(log n).
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>When to Use Binary Search</h3>
            <p className='text-lg text-white mb-4'>
                Binary Search is ideal for situations where you need to quickly locate an element within a large, sorted dataset. Some common use cases include:
            </p>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Search Problems:</strong> Finding a target element in a sorted array or list.</li>
                <li><strong>Optimization Problems:</strong> Identifying the best or optimal value within a range.</li>
                <li><strong>Decision-Making Problems:</strong> Determining the feasibility of a certain condition by narrowing down possible options.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Binary Search Algorithm</h3>
            <p className='text-lg text-white mb-4'>
                The core concept of binary search is to reduce the problem size by half with each step. Here's how the algorithm works:
            </p>
            <ol className='text-lg text-white list-decimal pl-6 mb-6'>
                <li>Initialize two pointers: <strong>low</strong> at the start of the array and <strong>high</strong> at the end.</li>
                <li>Calculate the middle index: <strong>mid = low + (high - low) / 2</strong>.</li>
                <li>If the target value equals the middle element, return the middle index.</li>
                <li>If the target value is less than the middle element, adjust the high pointer to <strong>mid - 1</strong>.</li>
                <li>If the target value is greater than the middle element, adjust the low pointer to <strong>mid + 1</strong>.</li>
                <li>Repeat steps 2-5 until the target value is found or the low pointer exceeds the high pointer.</li>
            </ol>

            <h3 className='text-xl font-bold text-white mb-4'>Binary Search Implementation in C++</h3>
            <p className='text-lg text-white mb-4'>
                Here's how you can implement Binary Search in C++:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search right half
        } else {
            high = mid - 1; // Search left half
        }
    }
    return -1; // Target not found
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Applications of Binary Search</h3>
            <p className='text-lg text-white mb-4'>
                Binary Search can be applied to various problems beyond simple element searching. Here are some examples:
            </p>
            <ul className='text-lg text-white list-disc pl-6 mb-6'>
                <li><strong>Finding the First/Last Occurrence:</strong> Modify the basic binary search to find the first or last occurrence of a target in a sorted array.</li>
                <li><strong>Search Insert Position:</strong> Determine where an element would fit in a sorted array.</li>
                <li><strong>Square Root Calculation:</strong> Use binary search to find the square root of a number by searching between 0 and the number itself.</li>
                <li><strong>Finding Minimum in Rotated Sorted Array:</strong> Identify the minimum element in a rotated sorted array using binary search.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Search Insert Position</h3>
            <p className='text-lg text-white mb-4'>
                Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. Here's how you can implement this in C++:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int searchInsert(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low; // Return the insert position
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Square Root Calculation</h3>
            <p className='text-lg text-white mb-4'>
                Use binary search to find the integer square root of a number. Here's the implementation in C++:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int sqrt(int x) {
    if (x == 0 || x == 1) return x;
    int low = 1, high = x, ans;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (mid*mid == x) return mid; // Perfect square
        if (mid*mid < x) {
            low = mid + 1;
            ans = mid;
        } else {
            high = mid - 1;
        }
    }
    return ans; // Return the integer part of the square root
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                Binary Search is a powerful algorithm with a wide range of applications in solving complex problems efficiently. Mastering this technique will greatly enhance your problem-solving skills in computer science and competitive programming.
            </p>
        </div>
    );
};

export default BinarySearchCourse;
