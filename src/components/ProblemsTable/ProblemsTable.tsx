import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle, BsYoutube } from "react-icons/bs";  // Import YouTube icon
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";

type ProblemsTableProps = {
    setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCategory: string | null;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems, selectedCategory }) => {
    const [problems, setProblems] = useState<DBProblem[]>([]);
    const solvedProblems = useGetSolvedProblems();

    useEffect(() => {
        const getProblems = async () => {
            setLoadingProblems(true);
            let q = query(collection(firestore, "problems"), orderBy("order", "asc"));

            if (selectedCategory) {
                q = query(
                    collection(firestore, "problems"),
                    where("category", "==", selectedCategory),
                    orderBy("order", "asc")
                );
            }

            const querySnapshot = await getDocs(q);
            const tmp: DBProblem[] = [];
            querySnapshot.forEach((doc) => {
                tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
            });
            setProblems(tmp);
            setLoadingProblems(false);
        };

        getProblems();
    }, [selectedCategory, setLoadingProblems]);

    return (
        <>
            <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
                    <tr>
                        <th scope='col' className='px-1 py-3 w-0 font-medium'>
                            Status
                        </th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>
                            Title
                        </th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>
                            Difficulty
                        </th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium cursor-pointer' onClick={() => {
                            // Toggle sorting by category when the header is clicked
                            setProblems(problems.slice().reverse()); // Example: toggling the sort order
                        }}>
                            Category
                        </th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>
                            Solution
                        </th>
                    </tr>
                </thead>
                <tbody className='text-white'>
                    {problems.map((problem, idx) => {
                        const difficulyColor =
                            problem.difficulty === "Easy"
                                ? "text-dark-green-s"
                                : problem.difficulty === "Medium"
                                ? "text-dark-yellow"
                                : "text-dark-pink";

                        return (
                            <tr className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={problem.id}>
                                <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                                    {solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
                                </th>
                                <td className='px-6 py-4'>
                                    {problem.link ? (
                                        <Link
                                            href={problem.link}
                                            className='hover:text-blue-600 cursor-pointer'
                                            target='_blank'
                                        >
                                            {problem.title}
                                        </Link>
                                    ) : (
                                        <Link
                                            className='hover:text-blue-600 cursor-pointer'
                                            href={`/problems/${problem.id}`}
                                        >
                                            {problem.title}
                                        </Link>
                                    )}
                                </td>
                                <td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
                                <td className={"px-6 py-4"}>{problem.category}</td>
                                <td className={"px-6 py-4"}>
                                    {'youtubeLink' in problem && problem.youtubeLink ? (
                                        <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer">
                                        <BsYoutube fontSize={"24"} className="text-red-500 hover:text-red-700 cursor-pointer" />
                                          </a>
                                    ) : null} (
                                        <p className='text-gray-400'>Coming soon</p>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ProblemsTable;

function useGetSolvedProblems() {
    const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getSolvedProblems = async () => {
            const userRef = doc(firestore, "users", user!.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                setSolvedProblems(userDoc.data().solvedProblems);
            }
        };

        if (user) getSolvedProblems();
        if (!user) setSolvedProblems([]);
    }, [user]);

    return solvedProblems;
}
