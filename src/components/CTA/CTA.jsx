import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CTA() {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.cta-header', {
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

			gsap.from('.cta-title', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 65%',
					once: true,
				},
				y: 80,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
			});

			gsap.from('.cta-info', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 55%',
					once: true,
				},
				y: 40,
				opacity: 0,
				duration: 0.8,
				delay: 0.15,
				ease: 'power3.out',
			});

			gsap.from('.cta-bottom', {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 40%',
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
			id="contact"
			className="bg-[#b59a72] px-6 py-24 text-[#151515] lg:px-10 lg:py-40"
		>
			<div className="mx-auto max-w-[1400px]">
				{/* Header */}
				<div className="cta-header mb-20 flex items-center gap-4 border-t border-[#151515]/25 pt-4">
					<span className="text-[10px] tracking-[0.2em]">06</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">
						Создать ваше событие
					</span>
				</div>

				{/* Main */}
				<div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-9">
						<h2 className="cta-title max-w-6xl font-serif text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
							Давайте
							<br />
							создадим
							<br />
							что-то особенное.
						</h2>
					</div>

					<div className="cta-info flex flex-col justify-end lg:col-span-3">
						<p className="max-w-xs text-sm leading-[1.7] text-[#151515]/65">
							Расскажите немного о вашем событии. Мы свяжемся с вами, чтобы
							обсудить детали.
						</p>

						<a
							href="#contact-form"
							className="group mt-8 flex w-fit items-center gap-5 border-b border-[#151515]/40 pb-3 text-xs uppercase tracking-[0.2em]"
						>
							Обсудить событие
							<span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
								→
							</span>
						</a>
					</div>
				</div>

				{/* Bottom */}
				<div className="cta-bottom mt-24 grid gap-8 border-t border-[#151515]/25 pt-5 text-[10px] uppercase tracking-[0.18em] sm:grid-cols-2 lg:grid-cols-3">
					<div>
						<p className="text-[#151515]/50">Email</p>

						<a
							href="mailto:hello@wedding.ru"
							className="mt-2 block transition-opacity hover:opacity-60"
						>
							hello@wedding.ru
						</a>
					</div>

					<div>
						<p className="text-[#151515]/50">Телефон</p>

						<a
							href="tel:+79999999999"
							className="mt-2 block transition-opacity hover:opacity-60"
						>
							+7 999 999 99 99
						</a>
					</div>

					<div>
						<p className="text-[#151515]/50">География</p>

						<p className="mt-2">Россия · Европа</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CTA;
