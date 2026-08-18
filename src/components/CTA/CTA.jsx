import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CTA() {
	const sectionRef = useRef(null);

	const [status, setStatus] = useState('idle');

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

	const handleSubmit = async (event) => {
		event.preventDefault();

		setStatus('sending');

		const form = event.currentTarget;
		const formData = new FormData(form);

		formData.append('access_key', 'YOUR_ACCESS_KEY');

		formData.append('subject', 'Новая заявка с сайта Wedding');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});

			const data = await response.json();

			if (data.success) {
				setStatus('success');
				form.reset();
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
	};

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="bg-[var(--color-page)] px-6 py-24 text-[#151515] lg:px-10 lg:py-40"
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
					<div className="lg:col-span-7">
						<h2 className="cta-title max-w-6xl font-serif text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
							Давайте
							<br />
							создадим
							<br />
							что-то особенное.
						</h2>
					</div>

					<div className="cta-info flex flex-col justify-end lg:col-span-5">
						<p className="max-w-md text-sm leading-[1.7] text-[#151515]/65">
							Расскажите немного о вашем событии. Мы свяжемся с вами, чтобы
							обсудить детали.
						</p>

						{/* Form */}
						<form
							id="contact-form"
							onSubmit={handleSubmit}
							className="mt-10 space-y-5"
						>
							{/* Name */}
							<div>
								<label
									htmlFor="name"
									className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-text)]/50"
								>
									Имя
								</label>

								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder="Ваше имя"
									className="w-full border-b border-[var(--color-text)]/30 bg-[var(--color-page)] py-3 text-sm outline-none placeholder:text-[var(--color-text)]/40 transition-colors focus:border-[var(--color-text)]"
								/>
							</div>

							{/* Phone */}
							<div>
								<label
									htmlFor="phone"
									className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-text)]/50"
								>
									Телефон
								</label>

								<input
									id="phone"
									name="phone"
									type="tel"
									required
									placeholder="+7 999 999 99 99"
									className="w-full border-b border-[var(--color-text)]/30 bg-[var(--color-page)] py-3 text-sm outline-none placeholder:text-[var(--color-text)]/40 transition-colors focus:border-[var(--color-text)]"
								/>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-text)]/50"
								>
									Email
								</label>

								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="your@email.ru"
									className="w-full border-b border-[var(--color-text)]/30 bg-[var(--color-page)] py-3 text-sm outline-none placeholder:text-[var(--color-text)]/40 transition-colors focus:border-[var(--color-text)]"
								/>
							</div>

							{/* Event type */}
							<div>
								<label
									htmlFor="event"
									className="mb-2 block text-sm uppercase text-[var(--color-text)]/50"
								>
									Тип мероприятия
								</label>

								<select
									id="event"
									name="event"
									required
									defaultValue=""
									className="w-full border-b border-[var(--color-text)]/30 bg-[var(--color-page)] py-3 text-sm outline-none focus:border-[var(--color-text)] transition-colors"
								>
									<option
										value=""
										disabled
										className="bg-[var(--color-page)] text-[var(--color-text)]"
									>
										Выберите тип
									</option>

									<option
										value="Свадьба"
										className="bg-[var(--color-page)] text-[var(--color-text)]"
									>
										Свадьба
									</option>

									<option
										value="Частное событие"
										className="bg-[var(--color-page)] text-[var(--color-text)]"
									>
										Частное событие
									</option>

									<option
										value="Корпоративное мероприятие"
										className="bg-[var(--color-page)] text-[var(--color-text)]"
									>
										Корпоративное мероприятие
									</option>

									<option
										value="Концепция и декор"
										className="bg-[var(--color-page)] text-[var(--color-text)]"
									>
										Концепция и декор
									</option>
								</select>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor="message"
									className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-text)]/50"
								>
									Сообщение
								</label>

								<textarea
									id="message"
									name="message"
									required
									rows="3"
									placeholder="Расскажите о вашем мероприятии..."
									className="w-full border-b border-[var(--color-text)]/30 bg-[var(--color-page)] py-3 text-sm outline-none placeholder:text-[var(--color-text)]/40 transition-colors focus:border-[var(--color-text)]"
								/>
							</div>

							{/* Privacy */}
							<label className="flex cursor-pointer items-start gap-3 pt-2 text-[10px] leading-[1.5] text-[#151515]/60">
								<input
									type="checkbox"
									name="privacy"
									required
									className="h-4 w-4 appearance-none rounded-sm border border-[#151515]/40 bg-[var(--color-page)] checked:bg-[#7fb974]"
								/>

								<span>
									Я согласен с{' '}
									<a
										href="/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 transition-opacity hover:opacity-60"
									>
										политикой конфиденциальности
									</a>
								</span>
							</label>

							{/* Submit */}
							<button
								type="submit"
								disabled={status === 'sending'}
								className="cursor-pointer group mt-4 flex w-full items-center justify-between border-b border-[#151515]/40 pb-3 pt-3 text-x2 uppercase tracking-[0.2em] transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-50"
							>
								<span>
									{status === 'sending' ? 'Отправка...' : 'Обсудить событие'}
								</span>

								<span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
									→
								</span>
							</button>

							{/* Status */}
							{status === 'success' && (
								<div className="border border-[#151515]/20 p-4 text-xs leading-[1.6]">
									Спасибо! Ваша заявка отправлена.
									<br />
									Мы свяжемся с вами в ближайшее время.
								</div>
							)}

							{status === 'error' && (
								<div className="border border-red-900/30 p-4 text-xs leading-[1.6]">
									Не удалось отправить заявку.
									<br />
									Попробуйте ещё раз или свяжитесь с нами по телефону.
								</div>
							)}
						</form>
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

						<p className="mt-2">Россия</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CTA;
