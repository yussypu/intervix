import React, { useState } from "react"; // Ensure useState is imported
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";

const PracticePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loadingProblems, setLoadingProblems] = useState<boolean>(false);

    return (
        <>
            <Topbar /> {/* Add the Topbar component here */}
            <main className="bg-dark-layer-2 min-h-screen">
                <div className="text-center mt-10">
                    <h1 className="text-5xl font-bold text-white">Practice Problems</h1>
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
