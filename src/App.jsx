import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />

			<main>
				<Hero />
				<About />
				<Services />
				<Portfolio />
				<Process />
				<Testimonials />
				<CTA />
				<Footer />
			</main>
		</>
	);
}

export default App;
