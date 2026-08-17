import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
	{
		number: '01',
		title: 'Знакомство',
		description:
			'Обсуждаем ваши идеи, пожелания и формат события. Определяем задачи и создаём общее видение.',
	},
	{
		number: '02',
		title: 'Концепция',
		description:
			'Разрабатываем визуальное направление, подбираем площадку, декор, флористику и команду.',
	},
	{
		number: '03',
		title: 'Подготовка',
		description:
			'Координируем подрядчиков, контролируем детали и собираем всё в единую систему.',
	},
	{
		number: '04',
		title: 'Ваш день',
		description:
			'Всё готово. Вы наслаждаетесь событием, а мы следим за тем, чтобы каждая деталь работала.',
	},
];

function Process() {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.process-header', {
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

			gsap.from('.process-intro', {
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

			gsap.from('.process-step', {
				scrollTrigger: {
					trigger: '.process-steps',
					start: 'top 80%',
					once: true,
				},
				y: 60,
				opacity: 0,
				duration: 0.8,
				stagger: 0.3,
				ease: 'power3.out',
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="process"
			className="overflow-hidden bg-[#151515] px-6 py-24 text-[#f8f6f1] lg:px-10 lg:py-40"
		>
			<div className="mx-auto max-w-[1400px]">
				{/* Header */}
				<div className="process-header mb-20 flex items-center gap-4 border-t border-white/20 pt-4">
					<span className="text-[10px] tracking-[0.2em] text-[#b59a72]">
						04
					</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">
						Как мы работаем
					</span>
				</div>

				{/* Intro */}
				<div className="process-intro mb-24 grid gap-10 lg:grid-cols-12">
					<h2 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:col-span-8 lg:text-8xl">
						От идеи
						<br />
						до вашего
						<br />
						идеального дня.
					</h2>

					<p className="max-w-sm self-end text-sm leading-[1.7] text-white/50 lg:col-span-3 lg:col-start-10">
						Четыре понятных этапа. Один человек отвечает за всё целиком.
					</p>
				</div>

				{/* Steps */}
				<div className="process-steps grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<article
							key={step.number}
							className={`process-step border-b border-white/15 py-8 lg:border-b-0 lg:py-10 ${
								index !== steps.length - 1 ? 'lg:border-r lg:pr-8' : ''
							} ${index !== 0 ? 'md:pl-8' : ''}`}
						>
							<div className="flex items-start justify-between">
								<span className="text-[10px] tracking-[0.2em] text-[#b59a72]">
									{step.number}
								</span>

								<span className="text-white/30">↗</span>
							</div>

							<h3 className="mt-16 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
								{step.title}
							</h3>

							<p className="mt-5 max-w-xs text-sm leading-[1.7] text-white/50">
								{step.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Process;
