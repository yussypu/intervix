// src/components/CodeChallenge.tsx

import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

interface CodeChallengeProps {
  prompt: string;
  initialCode: string;
  testCases: { input: any; output: any }[];
}

const CodeChallenge: React.FC<CodeChallengeProps> = ({ prompt, initialCode, testCases }) => {
  const [output, setOutput] = useState<string[]>([]);

  const runCode = (userCode: string) => {
    try {
      // Fake test case execution logic (for demo purposes)
      const results = testCases.map((testCase) => {
        const { input, output } = testCase;
        const userResult = eval(userCode); // WARNING: This is dangerous and is only for demo purposes.
        return userResult === output ? 'Passed' : `Failed for input: ${input}`;
      });
      setOutput(results);
    } catch (error) {
      setOutput([`Error: ${error.message}`]);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Code Challenge</h2>
      <p className="text-lg text-white mb-4">{prompt}</p>
      <CodeEditor initialCode={initialCode} onRunCode={runCode} />
      <h3 className="text-lg font-bold text-white mt-6">Test Results:</h3>
      <ul className="text-lg text-white">
        {output.map((result, idx) => (
          <li key={idx}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default CodeChallenge;
