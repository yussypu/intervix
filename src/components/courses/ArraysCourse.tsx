import React, { useState } from 'react';

const executeCode = (code: string): string => {
    try {
        // Basic simulation of JavaScript code execution
        return eval(code); // Warning: Using eval can be dangerous; it's just for demonstration here.
    } catch (error) {
        return `Error: ${error.message}`;
    }
};

const ArraysCourse: React.FC = () => {
    const [codeInput, setCodeInput] = useState<string>(`for(int i = 0; i < 5; i++) { cout << arr[i] << " "; }`);
    const [codeOutput, setCodeOutput] = useState<string>('');

    const handleRunCode = () => {
        setCodeOutput(executeCode(codeInput));
    };

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [quizFeedback, setQuizFeedback] = useState<string>('');

    const handleAnswer = (answer: string) => {
        if (answer === 'Deletion') {
            setQuizFeedback("Correct! Deletion removes an element from the array.");
        } else {
            setQuizFeedback("Incorrect. Try again!");
        }
    };

    const [challengeSolution, setChallengeSolution] = useState<string>('');

    const handleChallengeSubmit = () => {
        // Validate and check solution
        // For now, just display it
        console.log(challengeSolution);
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', e.currentTarget.id);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const droppedElement = document.getElementById(data);
        // Implement array update logic here
    };

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
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int arr[5]; // Declaration of an array of size 5\narr[0] = 10; // Initializing the first element\nint arr2[5] = {1, 2, 3, 4, 5}; // Declaration and initialization`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>2. Traversal</h4>
            <p className='text-lg text-white mb-4'>
                Traversal refers to accessing each element of the array one by one:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`for(int i = 0; i < 5; i++) {\n    cout << arr2[i] << " ";\n} // Output: 1 2 3 4 5`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>3. Insertion</h4>
            <p className='text-lg text-white mb-4'>
                Insertion involves adding an element at a specific index:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int arr[6] = {1, 2, 4, 5, 6};\nint pos = 2, newElement = 3;\nfor(int i = 5; i > pos; i--) {\n    arr[i] = arr[i-1];\n}\narr[pos] = newElement;\n// Array after insertion: 1 2 3 4 5 6`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>4. Deletion</h4>
            <p className='text-lg text-white mb-4'>
                Deletion involves removing an element from a specific index:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int arr[6] = {1, 2, 3, 4, 5, 6};\nint pos = 2;\nfor(int i = pos; i < 5; i++) {\n    arr[i] = arr[i+1];\n}\n// Array after deletion: 1 2 4 5 6`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>5. Searching</h4>
            <p className='text-lg text-white mb-4'>
                Searching for an element in an array returns its index:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int arr[5] = {1, 2, 3, 4, 5};\nint searchElement = 4;\nfor(int i = 0; i < 5; i++) {\n    if(arr[i] == searchElement) {\n        cout << "Element found at index " << i << endl;\n        break;\n    }\n} // Output: Element found at index 3`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>6. Example: Reversing an Array</h4>
            <p className='text-lg text-white mb-4'>
                Here’s an example of reversing an array:
            </p>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg overflow-auto'>
                <code>
                    {`int arr[5] = {1, 2, 3, 4, 5};\nint start = 0, end = 4;\nwhile(start < end) {\n    int temp = arr[start];\n    arr[start] = arr[end];\n    arr[end] = temp;\n    start++;\n    end--;\n}\n// Array after reversing: 5 4 3 2 1`}
                </code>
            </pre>

            <h4 className='text-lg font-bold text-white mb-2'>Conclusion</h4>
            <p className='text-lg text-white mb-4'>
                Arrays are a versatile and powerful data structure that serves as the building block for many complex algorithms and data structures. Mastering arrays will provide you with a strong foundation in data structures and algorithms.
            </p>

            {/* Interactive Code Editor */}
            <h3 className='text-xl font-bold text-white mb-4'>Try It Yourself: Array Traversal</h3>
            <p className='text-lg text-white mb-4'>
                Enter your code below to test array operations:
            </p>
            <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                className='w-full h-40 p-2 bg-gray-800 text-white'
            />
            <button onClick={handleRunCode} className='mt-2 p-2 bg-blue-500 text-white'>Run Code</button>
            <pre className='bg-gray-900 text-gray-100 p-4 mb-4 rounded-lg'>{codeOutput}</pre>

            {/* Interactive Poll */}
            <div className='interactive-poll'>
                <h3 className='text-lg text-white mb-4'>Quick Question:</h3>
                <p className='text-white'>Which operation is used to remove an element from an array?</p>
                <ul>
                    <li><button onClick={() => handleAnswer('Insertion')} className='text-blue-500'>Insertion</button></li>
                    <li><button onClick={() => handleAnswer('Traversal')} className='text-blue-500'>Traversal</button></li>
                    <li><button onClick={() => handleAnswer('Deletion')} className='text-blue-500'>Deletion</button></li>
                    <li><button onClick={() => handleAnswer('Searching')} className='text-blue-500'>Searching</button></li>
                </ul>
                <p className="text-green-500 mt-2">{quizFeedback}</p>
            </div>

            {/* Visualization Example */}
            <h3 className='text-xl font-bold text-white mb-4'>Visualize: Array Insertion</h3>
            <p className='text-lg text-white mb-4'>Drag and drop elements to insert a new element into the array:</p>
            <div
                className='array-container'
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <div id='element1' draggable onDragStart={handleDragStart} className='draggable-element bg-gray-700 text-white p-2 rounded'>1</div>
                <div id='element2' draggable onDragStart={handleDragStart} className='draggable-element bg-gray-700 text-white p-2 rounded'>2</div>
                <div id='element3' draggable onDragStart={handleDragStart} className='draggable-element bg-gray-700 text-white p-2 rounded'>3</div>
                {/* Add more elements */}
            </div>

            {/* Mini-Challenge */}
            <h3 className='text-xl font-bold text-white mb-4'>Challenge: Reverse an Array</h3>
            <p className='text-lg text-white mb-4'>Write code to reverse this array. Test your code by clicking "Run".</p>
            <textarea
                value={challengeSolution}
                onChange={(e) => setChallengeSolution(e.target.value)}
                className='w-full h-40 p-2 bg-gray-800 text-white'
            />
            <button onClick={handleChallengeSubmit} className='mt-2 p-2 bg-blue-500 text-white'>Submit Solution</button>

            {/* Real-World Scenario */}
            <h3 className='text-xl font-bold text-white mb-4'>Real-World Scenario: Leaderboard System</h3>
            <p className='text-lg text-white mb-4'>
                Imagine you are building a leaderboard for a game. Use arrays to manage and update player scores efficiently.
                Implement operations such as inserting new scores, removing old ones, and sorting the leaderboard.
            </p>

            {/* Peer-to-Peer Discussion */}
            <h3 className='text-xl font-bold text-white mb-4'>Peer-to-Peer Discussion</h3>
            <p className='text-lg text-white mb-4'>
                Join discussions with your peers to solve array-related problems and share insights. Engage with the community for collaborative learning.
            </p>
        </div>
    );
};

export default ArraysCourse;

