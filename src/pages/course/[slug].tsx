// pages/course/[slug].tsx
import { useRouter } from 'next/router';
import Topbar from "@/components/Topbar/Topbar";

const CoursePage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<Topbar />
			<main className='bg-dark-layer-2 min-h-screen p-6'>
				<h1 className='text-3xl font-bold text-white'>Course on {slug}</h1>
				<p className='text-lg text-white mt-4'>
					{/* Course content for {slug} goes here */}
					Welcome to the course on {slug}. Here, you'll find detailed information and resources to help you learn about {slug}. Explore various concepts and practice problems related to {slug}.
				</p>
			</main>
		</>
	);
};

export default CoursePage;
