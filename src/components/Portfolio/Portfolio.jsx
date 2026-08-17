import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		number: '01',
		title: 'Свадьба у озера',
		category: 'Свадьба',
		year: '2026',
		image: '/images/portfolio-wedding-01.png',
	},
	{
		number: '02',
		title: 'Камерный вечер',
		category: 'Частное событие',
		year: '2026',
		image: '/images/portfolio-wedding-02.jpg',
	},
	{
		number: '03',
		title: 'Большой день',
		category: 'Свадьба',
		year: '2025',
		image: '/images/portfolio-wedding-03.png',
	},
];

function Portfolio() {
    const sectionRef = useRef(null);
    
    	useLayoutEffect(() => {
				const ctx = gsap.context(() => {
					gsap.from('.portfolio-header', {
						scrollTrigger: {
							trigger: sectionRef.current,
							start: 'top 75%',
							once: true,
						},
						y: 20,
						opacity: 0,
						duration: 0.7,
						ease: 'power3.out',
					});

					gsap.from('.portfolio-intro', {
						scrollTrigger: {
							trigger: sectionRef.current,
							start: 'top 65%',
							once: true,
						},
						y: 50,
						opacity: 0,
						duration: 1,
						ease: 'power3.out',
					});

					gsap.from('.portfolio-project', {
						scrollTrigger: {
							trigger: '.portfolio-projects',
							start: 'top 80%',
							once: true,
						},
						y: 80,
						opacity: 0,
						duration: 1,
						stagger: 0.15,
						ease: 'power3.out',
					});
				}, sectionRef);

				return () => ctx.revert();
			}, []);

	return (
		<section
			ref={sectionRef}
			id="portfolio"
			className="bg-[#f8f6f1] px-6 py-24 text-[#151515] lg:px-10 lg:py-40"
		>
			<div className="mx-auto max-w-[1400px]">
				{/* Header */}
				<div className="portfolio-header mb-16 flex items-center gap-4 border-t border-[#151515]/20 pt-4">
					<span className="text-[10px] tracking-[0.2em] text-[#8d7b61]">
						03
					</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">
						Избранные события
					</span>
				</div>

				{/* Intro */}
				<div className="portfolio-intro mb-20 grid gap-10 lg:grid-cols-12">
					<h2 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:col-span-8 lg:text-8xl">
						Истории,
						<br />
						которые хочется
						<br />
						пересматривать.
					</h2>

					<p className="max-w-sm self-end text-sm leading-[1.7] text-[#151515]/60 lg:col-span-3 lg:col-start-10">
						Несколько событий, в которых мы собрали эстетику, эмоции и внимание
						к каждой детали.
					</p>
				</div>

				{/* Projects */}
				<div className="portfolio-projects space-y-20">
					{projects.map((project, index) => (
						<article
							key={project.number}
							className={`portfolio-project group ${
								index === 1
									? 'lg:ml-auto lg:w-[72%]'
									: index === 2
									? 'lg:w-[82%]'
									: 'lg:w-full'
							}`}
						>
							<div className="overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="block aspect-[16/10] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
							</div>

							<div className="mt-5 flex items-start justify-between border-t border-[#151515]/20 pt-4">
								<div>
									<p className="text-[10px] uppercase tracking-[0.2em] text-[#8d7b61]">
										{project.number}
									</p>

									<h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
										{project.title}
									</h3>
								</div>

								<div className="text-right text-[10px] uppercase tracking-[0.15em] text-[#151515]/50">
									<p>{project.category}</p>
									<p className="mt-1">{project.year}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
