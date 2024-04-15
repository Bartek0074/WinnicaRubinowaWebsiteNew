import Heading from '../Heading/Heading';
import styles from './Footer.module.scss';

import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<p className={styles.text}>
				<span>&copy; {currentYear} | Winnica Rubinowa | Cezary Morek | </span>
			</p>
			<div className={styles.link}>
				<a href='https://www.facebook.com/WinnicaRubinowa/' target='_blank'>
					<FaFacebook className={styles.icon} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
