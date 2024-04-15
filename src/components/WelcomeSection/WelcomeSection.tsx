import Heading from '../Heading/Heading';
import styles from './WelcomeSection.module.scss';

const WelcomeSection = () => {
	return (
		<div className={styles.welcomeSection}>
			<Heading text='Witamy' size='large' />
			<p className={styles.text}>
				Szanowni Państwo, witamy serdecznie na naszej stronie internetowej.
				Pragniemy podzielić się naszymi zainteresowaniami, jakimi stały się
				niespodziewanie uprawa winorośli i produkcja wina. Winnica dla nas to
				przede wszystkim sposób spędzania wolnego czasu, mnóstwo zabawy i
				ogromna satysfakcja z wykonywanej pracy.
			</p>
		</div>
	);
};

export default WelcomeSection;
