import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Hero() {
	const heroRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					ease: 'power3.out',
				},
			});

			tl.from('.hero-image', {
				scale: 1.15,
				duration: 1.8,
				ease: 'power3.out',
			})
				.from(
					'.hero-overlay',
					{
						opacity: 0,
						duration: 1,
					},
					'<'
				)
				.from(
					'.hero-eyebrow',
					{
						y: 30,
						opacity: 0,
						duration: 0.8,
					},
					'-=0.9'
				)
				.from(
					'.hero-title-line',
					{
						yPercent: 100,
						opacity: 0,
						duration: 1,
						stagger: 0.12,
					},
					'-=0.5'
				)
				.from(
					'.hero-bottom',
					{
						y: 30,
						opacity: 0,
						duration: 0.8,
					},
					'-=0.5'
				)
				.from(
					'.hero-scroll',
					{
						x: 20,
						opacity: 0,
						duration: 0.6,
					},
					'-=0.4'
				);
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			id="hero"
			className="relative min-h-screen overflow-hidden bg-[#f8f6f1] text-[#151515]"
		>
			{/* Background image */}
			<div className="absolute inset-0">
				<img
					src="/images/hero-wedding.jpg"
					alt="Свадебная церемония"
					className="hero-image h-full w-full object-cover"
				/>

				<div className="hero-overlay absolute inset-0 bg-black/10" />
			</div>

			{/* Content */}
			<div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-10 lg:px-10 lg:pb-14">
				<div className="max-w-2xl">
					<p className="hero-eyebrow mb-6 text-[10px] uppercase tracking-[0.3em] text-white">
						Организация свадеб и мероприятий
					</p>

					<h1 className="max-w-2xl overflow-hidden font-serif text-6xl leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl lg:text-[clamp(80px,8vw,150px)]">
						<span className="hero-title-line block">Создаём моменты,</span>

						<span className="hero-title-line block">которые остаются</span>
					</h1>
				</div>

				<div className="hero-bottom mt-10 flex flex-col justify-between gap-8 border-t border-white/30 pt-5 text-white sm:flex-row sm:items-end">
					<p className="max-w-sm text-sm leading-relaxed text-white/90">
						Берём на себя всё — от первой идеи до последнего гостя, создавая
						события, которые хочется прожить снова.
					</p>

					<a
						href="#contact"
						className="group flex items-center gap-4 text-[16px] uppercase tracking-[0.2em]"
					>
						<span className="flex h-12 w-12 items-center justify-center rounded-full border border-white transition-all duration-500 group-hover:bg-white group-hover:text-[#151515]">
							↗
						</span>

						<span>Обсудить проект</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;