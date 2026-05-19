import styles from './Footer.module.scss';

import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className={styles.footer}>
				<p className={styles.text}>
					<span>&copy; {currentYear} </span>
					<span>|</span>
					<span>Winnica Rubinowa</span>
					<span>|</span>
					<span>Cezary Morek</span>
					<span>|</span>
				</p>
				<div className={styles.link}>
					<a href='https://www.facebook.com/WinnicaRubinowa/' target='_blank'>
						<FaFacebook className={styles.icon} />
					</a>
				</div>
			</footer>
			<div className={styles.subFooter}>
				<a
					href="/prezentacja_kpo.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					Projekt KPO
				</a>
			</div>
		</>
	);
};

export default Footer;
