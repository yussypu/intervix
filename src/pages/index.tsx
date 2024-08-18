import Link from "next/link";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				<div className='text-center mt-10'>
					<h1 className='text-5xl font-bold text-white'>INTERVIX</h1>
					<p className='text-lg text-white mt-4'>
						Unlock coding interviews with our comprehensive DSA roadmap and courses.
					</p>
				</div>
				<div className='flex flex-wrap justify-center gap-6 mt-10'>
					{dataStructures.map((topic) => (
						<div
							key={topic.name}
							className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center'
						>
							<h2 className='text-xl text-white mb-4'>{topic.name}</h2>
							<div className='flex gap-4'>
								<Link href={`/course/${topic.slug}`}>
									<a className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
										Learn
									</a>
								</Link>
								<Link href='/problems'>
									<a className='bg-green-500 text-white px-4 py-2 rounded-lg'>
										Practice
									</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

const dataStructures = [
	{ name: 'Arrays', slug: 'arrays' },
	{ name: 'Stack', slug: 'stack' },
	{ name: 'Two Pointers', slug: 'two-pointers' },
	{ name: 'Binary Search', slug: 'binary-search' },
	{ name: 'Sliding Window', slug: 'sliding-window' },
	{ name: 'Linked List', slug: 'linked-list' },
	{ name: 'Trees', slug: 'trees' },
	{ name: 'Backtracking', slug: 'backtracking' },
	{ name: 'Heap', slug: 'heap' },
	{ name: 'Graphs', slug: 'graphs' },
	{ name: 'Greedy', slug: 'greedy' },
	{ name: 'DP', slug: 'dp' },
	{ name: 'Bit Manipulation', slug: 'bit-manipulation' },
];
