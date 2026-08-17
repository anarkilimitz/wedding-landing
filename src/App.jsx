import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

// Политика конфиденциальности
import Privacy from './pages/Privacy/Privacy';

function Home() {
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
			</main>

			<Footer />
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacy" element={<Privacy />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
