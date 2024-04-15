import styles from './AboutSection.module.scss';

import Heading from '../Heading/Heading';
import WhiteBlocks from '../WhiteBlocks/WhiteBlocks';
import AboutItem from '../AboutItem/AboutItem';

type Item = {
	title: string;
	text: string;
	imageSrc: string;
	imageAlt: string;
	imagePosition: 'left' | 'right';
};

const items: Item[] = [
	{
		title: 'Kim jesteśmy?',
		text: 'Jesteśmy małą, rodzinną, trzypokoleniową firmą winiarską, położoną na malowniczych terenach Małopolskiego Przełomu Wisły. Praca w winnicy i winiarni sprawia nam przede wszystkim przyjemność i radość, płynącą ze spędzania czasu w rodzinnym gronie. Rozwijamy się z każdym rokiem, myślimy o przyszłości i nie wyobrażamy sobie robienia czegoś innego.',
		imagePosition: 'left',
		imageSrc: './images/about/about1.jpg',
		imageAlt: 'Winogrona na krzewie',
	},
	{
		title: 'Gdzie nas znaleźć?',
		text: 'Nasza winnica położona jest w Ożarowie Pierwszym, niedaleko Opola Lubelskiego. Usytuowana jest w sąsiedztwie malowniczego regionu Małopolskiego Przełomu Wisły, który obejmuje 70-kilometrowy odcinek doliny Wisły od Zawichostu po Puławy. Dolina ma stosunkowo wąski kształt i dość strome zbocza, zbudowane głównie ze skał węglanowych (opoki i wapienie). Takie warunki geologiczne oraz fakt, że Wyżyna Lubelska jest regionem o największej ilości dni słonecznych w roku, umożliwiają uprawę winorośli.',
		imagePosition: 'right',
		imageSrc: './images/about/about2.jpg',
		imageAlt: 'Droga polna',
	},
	{
		title: 'Krótka historia',
		text: 'Uprawą winorośli oraz produkcją wina zainteresował nas nasz tata Krzysztof Morek, który już w 1989 r. sprowadził pierwsze krzaki - Skarb Panonii. Nasi rodzice, z zawodu ogrodnicy, hobbistycznie poszerzali nasze zbiory przez lata. W 2009 r. tata oficjalnie zarejestrował naszą winnicę w Stowarzyszeniu Winiarzy Małopolskiego Przełomu Wisły. Od tego czasu na dobre zaczęliśmy zajmować się tematyką winiarską. Metodą prób i błędów doskonaliliśmy techniki produkcji, aż doszliśmy do momentu, w którym jesteśmy teraz. Rok 2021 okazał się przełomowy. Uzyskaliśmy wszelkie pozwolenia uprawniające nas do obrotu winem. Obecnie posiadamy profesjonalną infrastrukturę winiarską oraz około 2,5 ha powierzchni winorośli przerobowej i deserowej.',
		imagePosition: 'left',
		imageSrc: './images/about/about3.jpg',
		imageAlt: 'Otwarta książka z okularami',
	},
];

const AboutSection = () => {
	return (
		<div className={styles.aboutSection}>
			<WhiteBlocks isLeftGray />
			<Heading text='O nas' size='large' type='white' />
			<div className={styles.aboutItems}>
				{items.map((item, index) => (
					<AboutItem
						key={index}
						title={item.title}
						text={item.text}
						imageSrc={item.imageSrc}
						imageAlt={item.imageAlt}
						imagePosition={item.imagePosition}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutSection;
