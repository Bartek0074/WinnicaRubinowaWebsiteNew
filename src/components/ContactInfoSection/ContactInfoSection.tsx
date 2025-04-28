import Heading from '../Heading/Heading';
import styles from './ContactInfoSection.module.scss';

const ContactInfoSection = () => {
	return (
		<div className={styles.contactInfoSection}>
			<Heading text='Kontakt' size='large' />
			<div className={styles.main}>
				<div className={styles.info}>
					<div className={styles.name}>
						<p>
							<strong>Winnica Rubinowa</strong>
						</p>
						<p>
							<strong>Cezary Morek</strong>
						</p>
					</div>
					<div className={styles.address}>
						<p className='contact__info-text-address-paragraph'>
							Ożarów Pierwszy 35
						</p>
						<p className='contact__info-text-address-paragraph'>
							24-300 Opole Lubelskie
						</p>
					</div>
					<p>winnicarubinowa@gmail.com</p>
					<p>tel. 579 256 894</p>
					<p>tel. 695 445 001</p>
				</div>
				<div className={styles.map}>
					<iframe
						title='Google Map'
						src='https://maps.google.com/maps?q=Winnica%20Rubinowa&t=&z=9&ie=UTF8&iwloc=&output=embed'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContactInfoSection;
