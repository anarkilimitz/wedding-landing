import Header from './components/Header/Header';

function App() {
	return (
		<>
			<Header />

			<main>
				<section
					id="hero"
					className="flex min-h-screen items-center justify-center bg-[#f8f6f1]"
				>
					<h1 className="font-serif text-6xl text-[#151515]">Свадьбы</h1>
				</section>
			</main>
		</>
	);
}

export default App;
