import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';


import './globals.css';

export const metadata = {
	title: 'Hannahs guesthouse',
	description: 'Charming guest house in the heart of Aberdeen',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer /> 
       
			</body>
		</html>
	);
}
