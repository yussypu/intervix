import { useState } from "react";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";

export default function Practice() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = ["All", "Arrays", "Stack", "Two Pointers", "Binary Search", "Sliding Window", "Linked List", "Trees", "Backtracking", "Heap", "Graphs", "Greedy", "DP", "Bit Manipulation"];

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category === "All" ? null : category);
    };

    return (
        <>
            <Topbar />
            <main className='bg-dark-layer-2 min-h-screen p-6'>
                <div className="text-center">
                    <h1 className='text-3xl font-bold text-white mb-6'>Practice Problems</h1>
                    <div className="flex justify-center gap-4 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryClick(category)}
                                className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <ProblemsTable selectedCategory={selectedCategory} />
            </main>
        </>
    );
}
