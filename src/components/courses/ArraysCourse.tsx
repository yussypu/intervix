const ArraysCourse = () => {
    const [pollFeedback, setPollFeedback] = useState('');

    const showCorrect = () => {
        setPollFeedback("Correct! Deletion removes an element from the array.");
    };

    const arrayTraversalCode = `int arr[5] = {1, 2, 3, 4, 5};
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    } // Output: 1 2 3 4 5`;

    const reverseArrayProblem = {
        description: 'Write code to reverse an array.',
        starterCode: `int arr[5] = {1, 2, 3, 4, 5};
int start = 0, end = 4;
while(start < end) {
  // Your code here
}
// Output should be 5 4 3 2 1`,
        testCases: [
            { input: '[1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' }
        ]
    };

    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Introduction to Arrays</h2>

            {/* Interactive Poll */}
            <div className='interactive-poll'>
                <h3 className='text-lg text-white mb-4'>Quick Question:</h3>
                <p className='text-white'>Which operation is used to remove an element from an array?</p>
                <ul>
                    <li>Insertion</li>
                    <li>Traversal</li>
                    <li><button onClick={showCorrect}>Deletion</button></li>
                    <li>Searching</li>
                </ul>
                <p id="poll-feedback" className="text-green-500 mt-2">{pollFeedback}</p>
            </div>

            {/* Interactive Code Editor */}
            <h3 className='text-xl font-bold text-white mb-4'>Try It Yourself: Array Traversal</h3>
            <p className='text-lg text-white mb-4'>
                Edit the code below to traverse this array. See the output in real-time:
            </p>
            <CodeEditor code={arrayTraversalCode} language="cpp" />

            {/* Visualization Example */}
            <h3 className='text-xl font-bold text-white mb-4'>Visualize: Array Insertion</h3>
            <p className='text-lg text-white mb-4'>Drag and drop elements to insert a new element into the array:</p>
            <ArrayVisualization />

            {/* Mini-Challenge */}
            <h3 className='text-xl font-bold text-white mb-4'>Challenge: Reverse an Array</h3>
            <p className='text-lg text-white mb-4'>Write code to reverse this array. Test your code by clicking "Run".</p>
            <CodeChallenge problem={reverseArrayProblem} />
        </div>
    );
};

export default ArraysCourse;
