import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
	{
		number: '01',
		quote:
			'Всё получилось именно так, как мы представляли. Мы просто наслаждались своим днём, а обо всём остальном команда позаботилась сама.',
		names: 'Анна & Михаил',
		date: 'Июнь 2026',
		image: '/images/testimonial-01.png',
	},
	{
		number: '02',
		quote:
			'Самое ценное — ощущение полного спокойствия. Каждая деталь была продумана заранее, а в день свадьбы нам не пришлось ни о чём переживать.',
		names: 'Екатерина & Александр',
		date: 'Август 2025',
		image: '/images/testimonial-02.png',
	},
	{
		number: '03',
		quote:
			'Получилась именно наша история — очень личная, красивая и совершенно не похожая на другие свадьбы.',
		names: 'Мария & Дмитрий',
		date: 'Сентябрь 2025',
		image: '/images/testimonial-03.png',
	},
];

function Testimonials() {
	const sectionRef = useRef(null);
	const swiperRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.testimonials-header', {
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

			gsap.from('.testimonials-slider', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 65%',
					once: true,
				},
				y: 60,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
			});

			gsap.from('.testimonials-controls', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 50%',
					once: true,
				},
				y: 20,
				opacity: 0,
				duration: 0.7,
				delay: 0.2,
				ease: 'power3.out',
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="testimonials"
			className="bg-[#f8f6f1] px-6 py-24 text-[#151515] lg:px-10 lg:py-40"
		>
			<div className="mx-auto max-w-[1400px]">
				{/* Header */}
				<div className="testimonials-header mb-20 flex items-center gap-4 border-t border-[#151515]/20 pt-4">
					<span className="text-[10px] tracking-[0.2em] text-[#8d7b61]">
						05
					</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">
						Отзывы
					</span>
				</div>

				<Swiper
					modules={[EffectFade]}
					effect="fade"
					fadeEffect={{
						crossFade: true,
					}}
					speed={800}
					loop
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					className="testimonials-slider w-full"
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.number}>
							<div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
								{/* Image */}
								<div className="lg:col-span-5">
									<div className="aspect-[4/5] overflow-hidden">
										<img
											src={testimonial.image}
											alt={testimonial.names}
											className="h-full w-full object-cover"
										/>
									</div>
								</div>

								{/* Quote */}
								<div className="flex flex-col justify-between lg:col-span-6 lg:col-start-7">
									<div>
										<span className="font-serif text-5xl text-[#8d7b61]">
											“
										</span>

										<blockquote className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
											{testimonial.quote}
										</blockquote>
									</div>

									<div className="mt-12 flex items-end justify-between border-t border-[#151515]/20 pt-5">
										<div>
											<p className="font-serif text-2xl">{testimonial.names}</p>

											<p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#151515]/50">
												{testimonial.date}
											</p>
										</div>

										<div className="text-[10px] tracking-[0.2em] text-[#8d7b61]">
											{testimonial.number} / 03
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Controls */}
				<div className="testimonials-controls mt-10 flex items-center justify-between border-t border-[#151515]/20 pt-5">
					<div className="text-[10px] uppercase tracking-[0.2em] text-[#151515]/40">
						Листайте отзывы
					</div>

					<div className="flex gap-3">
						<button
							type="button"
							aria-label="Предыдущий отзыв"
							onClick={() => swiperRef.current?.slidePrev()}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-[#151515]/20 text-lg transition-all duration-300 hover:bg-[#151515] hover:text-white"
						>
							←
						</button>

						<button
							type="button"
							aria-label="Следующий отзыв"
							onClick={() => swiperRef.current?.slideNext()}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-[#151515]/20 text-lg transition-all duration-300 hover:bg-[#151515] hover:text-white"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
