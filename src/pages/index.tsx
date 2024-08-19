import Link from 'next/link';
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

const topics = [
    { name: "Arrays", slug: "arrays" },
    { name: "Stack", slug: "stack" },
    { name: "Two Pointers", slug: "two-pointers" },
    { name: "Binary Search", slug: "binary-search" },
    { name: "Sliding Window", slug: "sliding-window" },
    { name: "Linked List", slug: "linked-list" },
    { name: "Trees", slug: "trees" },
    { name: "Backtracking", slug: "backtracking" },
    { name: "Heap", slug: "heap" },
    { name: "Graphs", slug: "graphs" },
    { name: "Greedy", slug: "greedy" },
    { name: "Dynamic Programming", slug: "dp" },
    { name: "Bit Manipulation", slug: "bit-manipulation" }
];

export default function Home() {
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return (
        <>
            <main className='bg-dark-layer-2 min-h-screen p-6'>
                <Topbar />
                <h1 className='text-2xl text-center text-white dark:text-white font-medium uppercase mt-10 mb-5'>
                    Coding Interviews Unlocked
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {topics.map(topic => (
                        <div
                            key={topic.slug}
                            className='bg-dark-layer-1 p-6 rounded-lg shadow-lg'
                        >
                            <h2 className='text-2xl font-bold text-white mb-4'>{topic.name}</h2>
                            <div className='flex justify-between'>
                                <Link href={`/course/${topic.slug}`}>
                                    <a className='bg-blue-500 text-white py-2 px-4 rounded'>Learn</a>
                                </Link>
                                <Link href="/practice">
                                    <a className='bg-green-500 text-white py-2 px-4 rounded'>Practice</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
