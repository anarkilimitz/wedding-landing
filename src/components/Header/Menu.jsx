import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const menuItems = [
	{
		number: '01',
		label: 'О нас',
		href: '#about',
	},
	{
		number: '02',
		label: 'Услуги',
		href: '#services',
	},
	{
		number: '03',
		label: 'Портфолио',
		href: '#portfolio',
	},
	{
		number: '04',
		label: 'Как мы работаем',
		href: '#process',
	},
	{
		number: '05',
		label: 'Отзывы',
		href: '#reviews',
	},
	{
		number: '06',
		label: 'FAQ',
		href: '#faq',
	},
	{
		number: '07',
		label: 'Контакты',
		href: '#contacts',
	},
];

function Menu({ isOpen, onClose }) {
	const menuRef = useRef(null);
	const overlayRef = useRef(null);
	const itemsRef = useRef([]);

    useLayoutEffect(() => {
			if (!menuRef.current) {
				return;
			}

			gsap.set(menuRef.current, {
				xPercent: 100,
			});
		}, []);

	useEffect(() => {
		const menu = menuRef.current;
		const overlay = overlayRef.current;

		if (!menu || !overlay) {
			return;
		}

		if (isOpen) {
			document.body.style.overflow = 'hidden';

			gsap.to(overlay, {
				autoAlpha: 1,
				duration: 0.4,
				ease: 'power2.out',
				pointerEvents: 'auto',
			});

			gsap.to(menu, {
				xPercent: 0,
				duration: 0.8,
				ease: 'power4.out',
			});

			gsap.fromTo(
				itemsRef.current,
				{
					y: 30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.06,
					delay: 0.3,
					ease: 'power3.out',
				}
			);
		} else {
			document.body.style.overflow = '';

			gsap.to(overlay, {
				autoAlpha: 0,
				duration: 0.3,
				ease: 'power2.in',
				pointerEvents: 'none',
			});

			gsap.to(menu, {
				xPercent: 100,
				duration: 0.7,
				ease: 'power4.inOut',
			});
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	return (
		<>
			{/* Overlay */}
			<div
				ref={overlayRef}
				className="pointer-events-none fixed inset-0 z-40 bg-black/40 opacity-0 backdrop-blur-[2px]"
				onClick={onClose}
				aria-hidden="true"
			/>

			{/* Menu */}
			<aside
				ref={menuRef}
				className="fixed right-0 top-0 z-50 flex h-dvh w-full flex-col bg-[#151515] px-7 py-7 text-white sm:w-[480px] sm:px-10"
				aria-hidden={!isOpen}
			>
				{/* Top */}
				<div className="flex items-center justify-between border-b border-white/10 pb-7">
					<div>
						<span className="font-serif text-2xl tracking-[-0.04em]">
							НАЗВАНИЕ
						</span>

						<span className="ml-2 text-[8px] uppercase tracking-[0.4em] text-[#b59a72]">
							Agency
						</span>
					</div>

					<button
						type="button"
						onClick={onClose}
						aria-label="Закрыть меню"
						className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:bg-white hover:text-[#151515]"
					>
						<span className="relative block h-4 w-4">
							<span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-current" />
							<span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-current" />
						</span>
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex flex-1 flex-col justify-center">
					<ul className="space-y-1">
						{menuItems.map((item, index) => (
							<li
								key={item.number}
								ref={(element) => {
									itemsRef.current[index] = element;
								}}
							>
								<a
									href={item.href}
									onClick={onClose}
									className="group flex items-center gap-5 py-3"
								>
									<span className="text-[10px] tracking-[0.15em] text-[#b59a72]">
										{item.number}
									</span>

									<span className="font-serif text-2xl tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
										{item.label}
									</span>
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Bottom */}
				<div className="border-t border-white/10 pt-7">
					<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
								Связаться с нами
							</p>

							<a
								href="tel:+79991234567"
								className="text-sm transition-colors hover:text-[#b59a72]"
							>
								+7 (999) 123-45-67
							</a>
						</div>

						<div className="flex gap-2">
							{['Instagram', 'Telegram', 'VK'].map((social) => (
								<a
									key={social}
									href="#"
									aria-label={social}
									className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[9px] uppercase transition-colors duration-300 hover:border-[#b59a72] hover:text-[#b59a72]"
								>
									{social.slice(0, 2)}
								</a>
							))}
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}

export default Menu;
