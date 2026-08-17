import { useState } from 'react'
import Menu from './Menu'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
		<>
			<header className="absolute inset-x-0 top-0 z-40">
				<div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6 lg:px-10">
					{/* Logo */}
					<a
						href="#hero"
						className="group flex flex-col leading-none text-[#151515]"
					>
						<span className="font-serif text-2xl tracking-[-0.04em]">
							НАЗВАНИЕ
						</span>

						<span className="mt-1 text-[8px] uppercase tracking-[0.45em] text-[#8d7b61]">
							Agency
						</span>
					</a>

					{/* Desktop navigation */}
					<nav className="hidden items-center gap-8 lg:flex">
						<a
							href="#about"
							className="text-[13px] transition-opacity duration-300 hover:opacity-50"
						>
							О нас
						</a>

						<a
							href="#services"
							className="text-[13px] transition-opacity duration-300 hover:opacity-50"
						>
							Услуги
						</a>

						<a
							href="#portfolio"
							className="text-[13px] transition-opacity duration-300 hover:opacity-50"
						>
							Портфолио
						</a>

						<a
							href="#process"
							className="text-[13px] transition-opacity duration-300 hover:opacity-50"
						>
							Как мы работаем
						</a>

						<a
							href="#testimonials"
							className="text-[13px] transition-opacity duration-300 hover:opacity-50"
						>
							Отзывы
						</a>

						<a
							href="#contact"
							className="text-[13px] transition-opacity duration-300 hover:opacity-50"
						>
							Контакты
						</a>
					</nav>

					{/* Actions */}
					<div className="flex items-center gap-3">
						<a
							href="#contacts"
							className="hidden rounded-full border border-[#151515]/40 px-5 py-3 text-[12px] transition-all duration-300 hover:bg-[#151515] hover:text-white sm:block"
						>
							Связаться с нами
						</a>

						<button
							type="button"
							onClick={toggleMenu}
							aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
							aria-expanded={isMenuOpen}
							className="relative h-11 w-24"
							style={{ perspective: '800px' }}
						>
							<span
								className="absolute inset-0 block transition-transform duration-700"
								style={{
									transform: isMenuOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
									transformStyle: 'preserve-3d',
								}}
							>
								{/* Front */}
								<span
									className="absolute inset-0 flex items-center justify-center rounded-full border border-[#151515]/40 bg-white/30 text-[11px] uppercase tracking-[0.18em]"
									style={{ backfaceVisibility: 'hidden' }}
								>
									Меню
								</span>

								{/* Back */}
								<span
									className="absolute inset-0 flex items-center justify-center rounded-full bg-[#151515] text-[11px] uppercase tracking-[0.18em] text-white"
									style={{
										backfaceVisibility: 'hidden',
										transform: 'rotateY(180deg)',
									}}
								>
									Закрыть
								</span>
							</span>
						</button>
					</div>
				</div>
			</header>

			<Menu isOpen={isMenuOpen} onClose={closeMenu} />
		</>
	);
}

export default Header