import styles from './CatalogSection.module.scss';

import Heading from '../Heading/Heading';
import { WineVintage } from '../../types/wines';
import CatalogItem from '../CatalogItem/CatalogItem';

const wineVintages: WineVintage[] = [
	{
		wineVintage: 2022,
		wines: [
			{
				year: 2022,
				name: 'Szmaragd',
				color: 'Białe',
				taste: 'Półwytrawne',
				variety: 'Sibera 100%',
				alcohol: '11%',
				description:
					'Wino o jasnozłocistej barwie i przyjemnej kwasowości. W zapachu wyczuwalne owoce cytrusowe, a w smaku zielony grejfrut. Dobrze komponuje się z daniami z drobiu, sałatkami i świeżymi serami.',
				imageSrc: './images/wines/wineSzmaragd.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
			{
				year: 2022,
				name: 'Szafir',
				color: 'Czerwone',
				taste: 'Wytrawne',
				variety: 'Regent 100%',
				alcohol: '11%',
				description:
					'Wino o delikatnym smaku. W zapachu mocno wyczuwalna wiśnia, w mniejszym stopniu suszone owoce i czarna porzeczka. W smaku dominują wiśnie i jeżyny.',
				imageSrc: './images/wines/wineSzafir.png',
				isAvailable: true,
				isNew: true,
				hasQualitySign: true,
			},
			{
				year: 2022,
				name: 'Hematyt',
				color: 'Czerwone',
				taste: 'Wytrawne',
				variety: 'Cabernet Cortis 50%, Rondo 50%',
				alcohol: '12%',
				description:
					'Wino o mocnym, czerwonym zabarwieniu, leżakowane w dębowej beczce. Delikatne w smaku, pachnie intensywnie wiśnią, w ustach wyczuwalne aromaty owoców leśnych.',
				imageSrc: './images/wines/wineHematyt.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
		],
	},
	{
		wineVintage: 2021,
		wines: [
			{
				year: 2021,
				name: 'Szmaragd',
				color: 'Białe',
				taste: 'Półwytrawne',
				variety: 'Sibera 100%',
				alcohol: '12%',
				description:
					'Wino o jasnożółtym zabarwieniu, w zapachu wyczuwalne aromaty liczi, w mniejszym stopniu jagody. W smaku dominuje zielony grejfrut.',
				imageSrc: './images/wines/wineSzmaragd.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
		],
	},
];

const CatalogSection = () => {
	return (
		<div className={styles.catalogSection}>
			<Heading text='Katalog win' size='large' />
			<p className={styles.text}>
				Zapraszamy do zapoznania się z naszą ofertą. W celu zakupu naszych win
				zapraszamy do odwiedzin bądź{' '}
				<a className={styles.link} href='#contact'>
					<strong>kontaktu</strong>
				</a>
			</p>

			{wineVintages.map((vintage, index) => (
				<div key={index} className={styles.wineVintage}>
					<Heading text={`Rocznik ${vintage.wineVintage}`} size='small' />
					<div className={styles.wines}>
						{vintage.wines.map((wine, index) => (
							<CatalogItem wine={wine} key={index} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default CatalogSection;
