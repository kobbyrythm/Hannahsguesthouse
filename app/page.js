import Roomcard from '@/components/Roomcard';
import Review from '@/components/Review';
import Values from '@/components/Values';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';


export default function Home() {
	return (
		<div>
			< Hero />
			< Welcome />
			< Values />
			<Roomcard />
			<Review />

		</div>
	);
}

