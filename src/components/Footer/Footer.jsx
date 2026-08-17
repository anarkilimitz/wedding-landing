function Footer() {
	return (
		<footer className="bg-[#151515] px-6 py-16 text-[#f8f6f1] lg:px-10 lg:py-24">
			<div className="mx-auto max-w-[1400px]">
				{/* Main */}
				<div className="grid gap-16 lg:grid-cols-12">
					{/* Brand */}
					<div className="lg:col-span-7">
						<p className="text-[10px] uppercase tracking-[0.25em] text-[#b59a72]">
							Организация событий
						</p>

						<h2 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[8rem]">
							Ваш день.
							<br />
							Ваша история.
						</h2>
					</div>

					{/* Navigation */}
					<div className="lg:col-span-2 lg:col-start-9">
						<p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
							Навигация
						</p>

						<nav className="mt-7 flex flex-col items-start gap-4 text-sm">
							<a
								href="#about"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								О нас
							</a>

							<a
								href="#services"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Услуги
							</a>

							<a
								href="#portfolio"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								События
							</a>

							<a
								href="#process"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Как мы работаем
							</a>

							<a
								href="#testimonials"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Отзывы
							</a>

							<a
								href="#contact"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Контакты
							</a>
						</nav>
					</div>

					{/* Social */}
					<div className="lg:col-span-2">
						<p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
							Связь
						</p>

						<div className="mt-7 flex flex-col items-start gap-4 text-sm">
							<a
								href="#"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Telegram
							</a>

							<a
								href="#"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Instagram
							</a>

							<a
								href="mailto:hello@wedding.ru"
								className="transition-opacity duration-300 hover:opacity-50"
							>
								Email
							</a>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-20 grid gap-5 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/40 sm:grid-cols-2">
					<p>© 2026 Wedding Studio</p>

					<a
						href="#"
						className="sm:text-right transition-opacity duration-300 hover:opacity-70"
					>
						Политика конфиденциальности
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
