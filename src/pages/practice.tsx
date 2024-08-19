import React, { useState } from "react";
import ProblemsTable from "@/components/ProblemsTable";

const PracticePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loadingProblems, setLoadingProblems] = useState<boolean>(false);

    const categories = [
        "Arrays", "Stack", "Two Pointers", "Binary Search", 
        "Sliding Window", "Linked List", "Trees", "Backtracking", 
        "Heap", "Graphs", "Greedy", "DP", "Bit Manipulation"
    ];

    return (
        <>
            <main className="bg-dark-layer-2 min-h-screen">
                <div className="text-center mt-10">
                    <h1 className="text-5xl font-bold text-white">Practice Problems</h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-blue-500' : 'bg-gray-700'} text-white`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                        <button
                            className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                            onClick={() => setSelectedCategory(null)}
                        >
                            Show All
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <ProblemsTable 
                        selectedCategory={selectedCategory} 
                        setLoadingProblems={setLoadingProblems} 
                    />
                </div>
            </main>
        </>
    );
};

export default PracticePage;
