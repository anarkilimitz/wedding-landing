function Privacy() {
	return (
		<main className="min-h-screen bg-[#f8f6f1] px-6 py-32 text-[#151515] lg:px-10 lg:py-40">
			<div className="mx-auto max-w-[1000px]">
				<div className="mb-16 flex items-center gap-4 border-t border-[#151515]/20 pt-4">
					<span className="text-[10px] tracking-[0.2em] text-[#8d7b61]">
						07
					</span>

					<span className="text-[10px] uppercase tracking-[0.25em]">
						Документы
					</span>
				</div>

				<h1 className="max-w-4xl font-serif text-4xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
					Политика
					<br />
					конфиденциальности
				</h1>

				<a
					href="/"
					className="group mt-12 inline-flex items-center gap-5 rounded-full border border-[#151515]/30 px-6 py-3 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#151515] hover:text-white"
				>
					<span className="text-base transition-transform duration-300 group-hover:-translate-x-1">
						←
					</span>
					Назад на сайт
				</a>

				<div className="mt-20 max-w-3xl space-y-12 text-sm leading-[1.8] text-[#151515]/70">
					<section>
						<h2 className="mb-4 font-serif text-3xl text-[#151515]">
							1. Общие положения
						</h2>

						<p>
							Настоящая Политика конфиденциальности определяет порядок обработки
							и защиты персональных данных пользователей сайта.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-serif text-3xl text-[#151515]">
							2. Какие данные могут обрабатываться
						</h2>

						<p>
							В зависимости от используемых на сайте форм и сервисов могут
							обрабатываться имя, номер телефона, адрес электронной почты и
							сведения, которые пользователь добровольно указывает в сообщении.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-serif text-3xl text-[#151515]">
							3. Цели обработки
						</h2>

						<p>
							Персональные данные могут использоваться для обработки обращений
							пользователей, связи с пользователем и предоставления информации
							об услугах.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-serif text-3xl text-[#151515]">
							4. Защита персональных данных
						</h2>

						<p>
							Оператор принимает необходимые организационные и технические меры
							для защиты персональных данных от неправомерного или случайного
							доступа, изменения, распространения и уничтожения.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-serif text-3xl text-[#151515]">
							5. Контактная информация
						</h2>

						<p>
							Сведения об операторе персональных данных и контактные данные
							должны быть указаны здесь перед публикацией документа.
						</p>
					</section>
				</div>

				<div className="mt-20 border-t border-[#151515]/20 pt-5 text-[10px] uppercase tracking-[0.15em] text-[#151515]/40">
					Последнее обновление: 2026
				</div>
			</div>
		</main>
	);
}

export default Privacy;
