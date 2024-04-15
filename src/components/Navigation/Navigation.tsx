import styles from './Navigation.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

import { HiMenu, HiX } from 'react-icons/hi';

const items = [
	{ id: 'home', name: 'home', classNames: styles.navItemFirst },
	{ id: 'about', name: 'o nas', classNames: styles.navItemSecond },
	{ id: 'gallery', name: 'galeria', classNames: styles.navItemThird },
	{ id: 'catalog', name: 'katalog win', classNames: styles.navItemFourth },
	{ id: 'contact', name: 'kontakt', classNames: styles.navItemFifth },
];

const Navigation = () => {
	const [active, setActive] = useState(false);

	const openMobileNav = () => {
		setActive(true);
	};

	const closeMobileNav = () => {
		setActive(false);
	};

	const navMobileClasses = classNames(styles.navMobile, {
		[styles.navMobileActive]: active,
	});
	return (
		<>
			<button className={styles.burgerBtn} onClick={openMobileNav}>
				<HiMenu />
			</button>
			<nav className={navMobileClasses}>
				<button className={styles.burgerBtnClose} onClick={closeMobileNav}>
					<HiX />
				</button>
				<div className={styles.navMobileItems}>
					{items.map((item) => (
						<a
							key={item.id}
							data-to-scrollspy-id={item.id}
							href={`#${item.id}`}
							className={classNames(styles.navItem, {
								[item.classNames]: active,
							})}
							onClick={closeMobileNav}
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>
			<nav className={styles.navDesktop}>
				<div className={styles.navDesktopItems}>
					{items.map((item) => (
						<a
							key={item.id}
							data-to-scrollspy-id={item.id}
							href={`#${item.id}`}
							className={styles.navItem}
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>
		</>
	);
};

export default Navigation;
