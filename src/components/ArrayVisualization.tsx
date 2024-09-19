// src/components/ArrayVisualization.tsx

import React, { useState } from 'react';
import './ArrayVisualization.css'; // Add this for CSS animation styles

interface ArrayVisualizationProps {
  initialArray: number[];
}

const ArrayVisualization: React.FC<ArrayVisualizationProps> = ({ initialArray }) => {
  const [array, setArray] = useState(initialArray);

  const handleInsert = (index: number, value: number) => {
    const newArray = [...array];
    newArray.splice(index, 0, value);
    setArray(newArray);
  };

  const handleDelete = (index: number) => {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  };

  const handleTraverse = () => {
    alert(`Array elements: ${array.join(', ')}`);
  };

  return (
    <div className="array-visualization">
      <div className="array-container">
        {array.map((num, idx) => (
          <div key={idx} className="array-element">
            {num}
          </div>
        ))}
      </div>
      <div className="array-actions">
        <button onClick={() => handleInsert(array.length, Math.floor(Math.random() * 100))}>
          Insert Random
        </button>
        <button onClick={() => handleDelete(array.length - 1)}>Delete Last</button>
        <button onClick={handleTraverse}>Traverse</button>
      </div>
    </div>
  );
};

export default ArrayVisualization;
