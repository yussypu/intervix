const SlidingWindowCourse = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Sliding Window Technique</h2>
            <p className='text-lg text-white mb-4'>
                The Sliding Window technique is a powerful method for solving problems involving subarrays or substrings. It involves maintaining a window of elements that "slides" over the input array or string to efficiently compute results. This technique is particularly useful for problems that require examining all contiguous subarrays or substrings of a fixed length or range.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Concepts and Terminology</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Window:</strong> A subset of elements from the input array or string. The size of the window can be fixed or variable.</li>
                <li><strong>Left Pointer:</strong> The starting index of the window.</li>
                <li><strong>Right Pointer:</strong> The ending index of the window.</li>
                <li><strong>Sliding:</strong> Moving the window by adjusting the left and right pointers based on the problem constraints.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Types of Sliding Window Techniques</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Fixed-Size Window:</strong> The window size is constant, and you slide the window across the array or string to compute results.</li>
                <li><strong>Variable-Size Window:</strong> The window size changes dynamically based on conditions or constraints.</li>
                <li><strong>Minimum/Maximum Sliding Window:</strong> Finding the minimum or maximum value in a sliding window of fixed or variable size.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Fixed-Size Sliding Window Example</h3>
            <p className='text-lg text-white mb-4'>
                Given an array of integers, find the maximum sum of any contiguous subarray of size `k`. This problem can be efficiently solved using a fixed-size sliding window.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[i - k + 1];
        }
    }
    return maxSum;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Variable-Size Sliding Window Example</h3>
            <p className='text-lg text-white mb-4'>
                Given an array of integers, find the minimum length of a contiguous subarray with a sum greater than or equal to a target value. This problem can be solved using a variable-size sliding window.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function minLengthSubarray(arr, target) {
    let minLength = Infinity;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            windowSum -= arr[left++];
        }
    }

    return minLength === Infinity ? 0 : minLength;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Applications of Sliding Window Technique</h3>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Substring/Substring Problems:</strong> Finding distinct characters, longest substrings, etc.</li>
                <li><strong>Subarray Problems:</strong> Maximum sum, minimum length, etc.</li>
                <li><strong>Real-Time Systems:</strong> Network traffic analysis, real-time monitoring, etc.</li>
            </ul>

            <h3 className='text-xl font-bold text-white mb-4'>Complexity Analysis</h3>
            <p className='text-lg text-white mb-4'>
                The Sliding Window technique typically improves the time complexity of problems that involve examining all subarrays or substrings. The fixed-size window usually operates in O(n) time complexity, where n is the length of the array or string. The variable-size window may involve additional operations but still provides significant performance benefits compared to brute-force approaches.
            </p>

            <h3 className='text-xl font-bold text-white mb-4'>Example Problem: Maximum Average Subarray</h3>
            <p className='text-lg text-white mb-4'>
                Given an array of integers and an integer `k`, find the maximum average of any contiguous subarray of size `k`.
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`function maxAverageSubarray(arr, k) {
    let maxAverage = -Infinity;
    let windowSum = 0;
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            maxAverage = Math.max(maxAverage, windowSum / k);
            windowSum -= arr[i - k + 1];
        }
    }
    return maxAverage;
}`}
                </code>
            </pre>

            <h3 className='text-xl font-bold text-white mb-4'>Conclusion</h3>
            <p className='text-lg text-white mb-4'>
                The Sliding Window technique is a versatile and efficient method for solving problems involving contiguous subarrays or substrings. By understanding and applying this technique, you can significantly optimize performance and handle a wide range of problems more effectively.
            </p>
        </div>
    );
};

export default SlidingWindowCourse;
