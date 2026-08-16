import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
					once: true,
				},
			});

			tl.from('.about-label', {
				y: 20,
				opacity: 0,
				duration: 0.7,
				ease: 'power3.out',
			})
				.from(
					'.about-title-line',
					{
						yPercent: 100,
						opacity: 0,
						duration: 0.9,
						stagger: 0.1,
						ease: 'power3.out',
					},
					'-=0.3'
				)
				.from(
					'.about-text',
					{
						y: 30,
						opacity: 0,
						duration: 0.8,
						ease: 'power3.out',
					},
					'-=0.5'
				)
				.from(
					'.about-link',
					{
						y: 20,
						opacity: 0,
						duration: 0.6,
						ease: 'power3.out',
					},
					'-=0.4'
				)
				.from(
					'.about-feature',
					{
						y: 30,
						opacity: 0,
						duration: 0.7,
						stagger: 0.12,
						ease: 'power3.out',
					},
					'-=0.3'
				);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="about"
			className="bg-[#f8f6f1] px-6 py-24 text-[#151515] lg:px-10 lg:py-40"
		>
			<div className="mx-auto max-w-[1400px]">
				{/* Top line */}
				<div className="about-label mb-16 flex items-center gap-4 border-t border-[#151515]/20 pt-4">
					<span className="text-[10px] tracking-[0.2em] text-[#8d7b61]">
						01
					</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">О нас</span>
				</div>

				{/* Main content */}
				<div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
					{/* Heading */}
					<div className="lg:col-span-7">
						<h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
							<span className="about-title-line block">Мы создаём</span>

							<span className="about-title-line block">события,</span>

							<span className="about-title-line block">которые</span>

							<span className="about-title-line block">запоминаются.</span>
						</h2>
					</div>

					{/* Text */}
					<div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
						<p className="about-text max-w-md text-base leading-[1.7] text-[#151515]/65">
							Каждая свадьба — это отдельная история. Мы соединяем эстетику,
							внимание к деталям и спокойную организацию, чтобы вы могли просто
							проживать свой день.
						</p>

						<a
							href="#contacts"
							className="about-link mt-10 flex w-fit items-center gap-4 text-[11px] uppercase tracking-[0.2em]"
						>
							<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#151515]/30 transition-all duration-300 hover:bg-[#151515] hover:text-white">
								↗
							</span>
							Узнать больше
						</a>
					</div>
				</div>

				{/* Features */}
				<div className="mt-24 grid border-t border-[#151515]/20 sm:grid-cols-3">
					<div className="about-feature border-b border-[#151515]/20 py-7 sm:border-b-0 sm:border-r sm:pr-8">
						<p className="font-serif text-4xl">01</p>

						<p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#151515]/50">
							Индивидуальный подход
						</p>
					</div>

					<div className="about-feature border-b border-[#151515]/20 py-7 sm:border-b-0 sm:border-r sm:px-8">
						<p className="font-serif text-4xl">02</p>

						<p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#151515]/50">
							Внимание к деталям
						</p>
					</div>

					<div className="about-feature py-7 sm:pl-8">
						<p className="font-serif text-4xl">03</p>

						<p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#151515]/50">
							Полная организация
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;