import React, { useState } from 'react';

const executeCode = (code: string): string => {
    try {
        // Basic simulation of JavaScript code execution
        return eval(code); // Warning: Using eval can be dangerous; it's just for demonstration here.
    } catch (error: any) {
        return `Error: ${error.message}`;
    }
};

const ArraysCourse: React.FC = () => {
    const [codeInput, setCodeInput] = useState<string>('');
    const [codeOutput, setCodeOutput] = useState<string>('');
    const [quizFeedback, setQuizFeedback] = useState<string>('');
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [challengeSolution, setChallengeSolution] = useState<string>('');
    const [challengeFeedback, setChallengeFeedback] = useState<string>('');

    const handleRunCode = () => {
        const output = executeCode(codeInput);
        setCodeOutput(output);
    };

    const handleAnswer = (answer: string) => {
        if (answer === 'Deletion') {
            setQuizFeedback("Correct! Deletion removes an element from the array.");
        } else {
            setQuizFeedback("Incorrect. Try again!");
        }
        setSelectedAnswer(answer);
    };

    const handleChallengeSubmit = () => {
        if (challengeSolution.trim() === '') {
            setChallengeFeedback("Please provide a solution before submitting.");
            return;
        }

        // Simple check to ensure that there is code written
        if (challengeSolution.includes('// Your code here')) {
            setChallengeFeedback("Please complete the code to solve the challenge.");
        } else {
            setChallengeFeedback("Challenge submitted! Check your solution.");
        }
    };

    return (
        <div className='p-6 max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-white mb-6'>Introduction to Arrays</h2>

            <p className='text-lg text-white mb-6'>
                Arrays are a fundamental data structure in computer science with a wide range of applications. They are essential for various tasks including:
            </p>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Data Storage:</strong> Arrays hold data for subsequent processing.</li>
                <li><strong>Data Structures:</strong> Arrays are used to implement other data structures such as stacks and queues.</li>
                <li><strong>Data Representation:</strong> They represent data in tables and matrices.</li>
                <li><strong>Dynamic Structures:</strong> Arrays are foundational for creating dynamic data structures like linked lists and trees.</li>
            </ul>

            <h3 className='text-2xl font-semibold text-white mb-4'>Common Operations on Arrays</h3>
            <p className='text-lg text-white mb-4'>
                Arrays support several key operations, each serving a distinct purpose:
            </p>
            <ul className='text-lg text-white mb-6 list-disc pl-6'>
                <li><strong>Traversal:</strong> Visiting each element in the array in a specific order, which could be sequential or reverse.</li>
                <li><strong>Insertion:</strong> Adding a new element at a specific index within the array.</li>
                <li><strong>Deletion:</strong> Removing an element from a particular index.</li>
                <li><strong>Searching:</strong> Locating the index of a specific element in the array.</li>
            </ul>

            <h3 className='text-2xl font-semibold text-white mb-4'>Interactive Code Block</h3>
            <p className='text-lg text-white mb-4'>
                Enter your code below to test array operations:
            </p>
            <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                className='w-full h-40 p-3 mb-4 bg-gray-900 text-white rounded border border-gray-700'
                placeholder='Write your code here...'
            />
            <button onClick={handleRunCode} className='p-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Run Code</button>
            <pre className='bg-gray-900 text-gray-100 p-4 mt-4 rounded-lg'>{codeOutput}</pre>

            <h3 className='text-2xl font-semibold text-white mt-8 mb-4'>Quick Quiz</h3>
            <p className='text-lg text-white mb-4'>
                Which operation is used to remove an element from an array?
            </p>
            <div className='flex flex-col mb-4'>
                {['Insertion', 'Traversal', 'Deletion', 'Searching'].map((option) => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={`p-2 mb-2 rounded ${selectedAnswer === option ? 'text-white' : 'text-blue-500'} ${selectedAnswer && option !== 'Deletion' ? 'bg-red-600' : 'bg-gray-700'} hover:bg-gray-600`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <p className="text-green-500 mb-4">{quizFeedback}</p>

            <h3 className='text-2xl font-semibold text-white mb-4'>Challenge: Reverse an Array</h3>
            <p className='text-lg text-white mb-4'>
                Write code to reverse this array. Test your code by clicking "Submit Solution".
            </p>
            <textarea
                value={challengeSolution}
                onChange={(e) => setChallengeSolution(e.target.value)}
                className='w-full h-40 p-3 mb-4 bg-gray-900 text-white rounded border border-gray-700'
                placeholder='Write your solution here...'
            />
            <button onClick={handleChallengeSubmit} className='p-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Submit Solution</button>
            <p className="text-yellow-500 mt-4">{challengeFeedback}</p>

            <h3 className='text-2xl font-semibold text-white mt-8 mb-4'>Real-World Scenario</h3>
            <p className='text-lg text-white mb-6'>
                Imagine you are building a leaderboard for a game. Use arrays to manage and update player scores efficiently.
                Implement operations such as inserting new scores, removing old ones, and sorting the leaderboard.
            </p>

            <h3 className='text-2xl font-semibold text-white mb-4'>Peer-to-Peer Discussion</h3>
            <p className='text-lg text-white mb-4'>
                Join discussions with your peers to solve array-related problems and share insights. Engage with the community for collaborative learning.
            </p>
        </div>
    );
};

export default ArraysCourse;
