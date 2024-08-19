import { useRouter } from 'next/router';
import Topbar from "@/components/Topbar/Topbar";
import ArraysCourse from "@/components/courses/ArraysCourse";
import LinkedListCourse from "@/components/courses/LinkedListCourse";
import StackCourse from "@/components/courses/StackCourse";
import TwoPointersCourse from "@/components/courses/TwoPointersCourse";
import BinarySearchCourse from "@/components/courses/BinarySearchCourse";
import SlidingWindowCourse from "@/components/courses/SlidingWindowCourse";
import TreesCourse from "@/components/courses/TreesCourse";
import BacktrackingCourse from "@/components/courses/BacktrackingCourse";
import HeapCourse from "@/components/courses/HeapCourse";
import GraphsCourse from "@/components/courses/GraphsCourse";
import GreedyCourse from "@/components/courses/GreedyCourse";
import DPCourse from "@/components/courses/DPCourse";
import BitManipulationCourse from "@/components/courses/BitManipulationCourse";

const CoursePage = () => {
	const router = useRouter();
	const { slug } = router.query;

	if (typeof slug !== 'string') {
		// Return early if slug is not yet defined or is an array
		return (
			<>
				<Topbar />
				<main className='bg-dark-layer-2 min-h-screen p-6'>
					<h1 className='text-3xl font-bold text-white text-center mt-6 mb-4'>
						Course content is loading...
					</h1>
				</main>
			</>
		);
	}

	const renderCourseContent = () => {
		switch (slug) {
			case 'arrays':
				return <ArraysCourse />;
			case 'stack':
				return <StackCourse />;
			case 'two-pointers':
				return <TwoPointersCourse />;
			case 'binary-search':
				return <BinarySearchCourse />;
			case 'sliding-window':
				return <SlidingWindowCourse />;
			case 'linked-list':
				return <LinkedListCourse />;
			case 'trees':
				return <TreesCourse />;
			case 'backtracking':
				return <BacktrackingCourse />;
			case 'heap':
				return <HeapCourse />;
			case 'graphs':
				return <GraphsCourse />;
			case 'greedy':
				return <GreedyCourse />;
			case 'dp':
				return <DPCourse />;
			case 'bit-manipulation':
				return <BitManipulationCourse />;
			default:
				return <p className='text-lg text-white text-center'>Course content not available.</p>;
		}
	};

	return (
		<>
			<Topbar />
			<main className='bg-dark-layer-2 min-h-screen p-6'>
				<h1 className='text-3xl font-bold text-white text-center mt-6 mb-4'>
					Course on {slug.replace('-', ' ').toUpperCase()}
				</h1>
				{renderCourseContent()}
			</main>
		</>
	);
};

export default CoursePage;
