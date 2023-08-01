import Roomcard from '@/components/Roomcard';
import Review from '@/components/Review';
import Values from '@/components/Values';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import React from "react";





export default function Home() {
	return (
		<div>
			< Hero />
			< Welcome />
			<Roomcard />
			< Values />
			<Review />

		</div>
	);
}

