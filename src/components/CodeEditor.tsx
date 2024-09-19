// src/components/CodeEditor.tsx

import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';

interface CodeEditorProps {
  initialCode: string;
  onRunCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, onRunCode }) => {
  const [code, setCode] = useState(initialCode);

  const handleRun = () => {
    onRunCode(code);
  };

  return (
    <div>
      <AceEditor
        mode="c_cpp"
        theme="monokai"
        name="codeEditor"
        width="100%"
        height="300px"
        fontSize={16}
        value={code}
        onChange={(newCode) => setCode(newCode)}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
        }}
      />
      <button
        onClick={handleRun}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Run Code
      </button>
    </div>
  );
};

export default CodeEditor;
