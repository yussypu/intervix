import { useRouter } from 'next/router';
import Topbar from "@/components/Topbar/Topbar";
import ArraysCourse from "@/components/courses/ArraysCourse";
import LinkedListCourse from "@/components/courses/LinkedListCourse";
// Import other course components as needed

const CoursePage = () => {
	const router = useRouter();
	const { slug } = router.query;

	const renderCourseContent = () => {
		switch (slug) {
			case 'arrays':
				return <ArraysCourse />;
			case 'linked-list':
				return <LinkedListCourse />;
			// Add cases for other courses
			default:
				return <p className='text-lg text-white'>Course content not available.</p>;
		}
	};

	return (
		<>
			<Topbar />
			<main className='bg-dark-layer-2 min-h-screen p-6'>
				<h1 className='text-3xl font-bold text-white text-center mt-6 mb-4'>
					Course on {slug?.replace('-', ' ').toUpperCase()}
				</h1>
				{renderCourseContent()}
			</main>
		</>
	);
};

export default CoursePage;
