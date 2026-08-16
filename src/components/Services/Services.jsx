import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
	{
		number: '01',
		title: 'Свадьбы',
		description:
			'Полная организация свадьбы — от концепции и площадки до координации в день события.',
		image: '/images/service-wedding.jpg',
	},
	{
		number: '02',
		title: 'Частные события',
		description:
			'Дни рождения, юбилеи, камерные вечера и другие события, созданные специально для вас.',
		image: '/images/service-private.jpg',
	},
	{
		number: '03',
		title: 'Корпоративные мероприятия',
		description:
			'Продуманные события для команд, клиентов и партнёров с единой концепцией и сценарием.',
		image: '/images/service-corporate.jpg',
	},
	{
		number: '04',
		title: 'Концепция и декор',
		description:
			'Разрабатываем визуальную концепцию, подбираем декор, флористику, свет и детали.',
		image: '/images/service-design.jpg',
	},
];

function Services() {
	const sectionRef = useRef(null);
	const imageRefs = useRef([]);
	const [activeService, setActiveService] = useState(0);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.services-label', {
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

			gsap.from('.service-item', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 70%',
					once: true,
				},
				y: 40,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: 'power3.out',
			});

			gsap.set(imageRefs.current, {
				opacity: 0,
				scale: 1.05,
			});

			gsap.set(imageRefs.current[0], {
				opacity: 1,
				scale: 1,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const handleServiceEnter = (index) => {
		if (index === activeService) {
			return;
		}

		const previousImage = imageRefs.current[activeService];
		const nextImage = imageRefs.current[index];

		setActiveService(index);

		if (!previousImage || !nextImage) {
			return;
		}

		gsap.killTweensOf([previousImage, nextImage]);

		gsap.set(nextImage, {
			opacity: 0,
			scale: 1.05,
		});

		gsap.to(previousImage, {
			opacity: 0,
			scale: 1.02,
			duration: 0.5,
			ease: 'power2.out',
		});

		gsap.to(nextImage, {
			opacity: 1,
			scale: 1,
			duration: 0.7,
			ease: 'power3.out',
		});
	};

	return (
		<section
			ref={sectionRef}
			id="services"
			className="bg-[#151515] px-6 py-24 text-[#f8f6f1] lg:px-10 lg:py-40"
		>
			<div className="mx-auto max-w-[1400px]">
				{/* Header */}
				<div className="services-label mb-16 flex items-center gap-4 border-t border-white/20 pt-4">
					<span className="text-[10px] tracking-[0.2em] text-[#b59a72]">
						02
					</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">
						Услуги
					</span>
				</div>

				{/* Content */}
				<div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
					{/* Services list */}
					<div className="lg:col-span-7">
						{services.map((service, index) => {
							const isActive = activeService === index;

							return (
								<button
									key={service.number}
									type="button"
									onMouseEnter={() => handleServiceEnter(index)}
									onFocus={() => handleServiceEnter(index)}
									className="service-item group block w-full border-b border-white/15 py-7 text-left first:border-t lg:py-9"
								>
									<div className="flex items-start gap-5">
										<span className="pt-2 text-[10px] tracking-[0.15em] text-[#b59a72]">
											{service.number}
										</span>

										<div className="flex-1">
											<div className="flex items-center justify-between gap-5">
												<h3
													className={`font-serif text-3xl tracking-[-0.03em] transition-opacity duration-300 sm:text-4xl lg:text-5xl ${
														isActive
															? 'opacity-100'
															: 'opacity-50 group-hover:opacity-100'
													}`}
												>
													{service.title}
												</h3>

												<span
													className={`text-xl transition-transform duration-500 ${
														isActive ? 'rotate-45' : ''
													}`}
												>
													↗
												</span>
											</div>

											<div
												className={`grid transition-all duration-500 ${
													isActive
														? 'grid-rows-[1fr] opacity-100'
														: 'grid-rows-[0fr] opacity-0'
												}`}
											>
												<div className="overflow-hidden">
													<p className="max-w-md pt-4 text-sm leading-[1.7] text-white/55">
														{service.description}
													</p>
												</div>
											</div>
										</div>
									</div>
								</button>
							);
						})}
					</div>

					{/* Images */}
					<div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
						<div className="sticky top-32 aspect-[3/4] overflow-hidden">
							{services.map((service, index) => (
								<img
									key={service.number}
									ref={(element) => {
										imageRefs.current[index] = element;
									}}
									src={service.image}
									alt={service.title}
									className="absolute inset-0 h-full w-full object-cover"
								/>
							))}

							<div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/60 to-transparent p-6">
								<p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
									{services[activeService].number}
								</p>

								<p className="mt-1 font-serif text-2xl text-white">
									{services[activeService].title}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
