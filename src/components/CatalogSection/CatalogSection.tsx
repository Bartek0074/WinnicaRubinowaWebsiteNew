import styles from './CatalogSection.module.scss';

import Heading from '../Heading/Heading';
import { WineVintage } from '../../types/wines';
import CatalogItem from '../CatalogItem/CatalogItem';

const wineVintages: WineVintage[] = [
	{
		wineVintage: 2023,
		wines: [
			{
				year: 2023,
				name: 'Bursztyn',
				color: 'Białe',
				taste: 'Słodkie',
				variety: 'Solaris&nbsp;100%',
				alcohol: '12%',
				description: '',
				imageSrc: './images/wines/bursztyn.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
			{
				year: 2023,
				name: 'Turkus',
				color: 'Białe',
				taste: 'Półsłodkie',
				variety:
					'Jutrzenka&nbsp;40%, Solaris&nbsp;10%, Bianca&nbsp;10%, Muscaris&nbsp;10%',
				alcohol: '12%',
				description: '',
				imageSrc: './images/wines/turkus.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
			{
				year: 2023,
				name: 'Cytryn',
				color: 'Białe',
				taste: 'Półsłodkie',
				variety: 'Hibernal&nbsp;100%',
				alcohol: '11%',
				description: '',
				imageSrc: './images/wines/cytryn.png',
				isAvailable: true,
				isNew: true,
				hasQualitySign: false,
			},
			{
				year: 2023,
				name: 'Agat',
				color: 'Białe',
				taste: 'Wytrawne',
				variety: 'Riesling&nbsp;50%, Johanniter&nbsp;25%, Hibernal&nbsp;25%',
				alcohol: '11%',
				description: '',
				imageSrc: './images/wines/agat.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
			{
				year: 2023,
				name: 'Diament',
				color: 'Różowe',
				taste: 'Wytrawne',
				variety: 'Zweigelt&nbsp;50%, Pinot&nbsp;Noir&nbsp;50%',
				alcohol: '12%',
				description: '',
				imageSrc: './images/wines/diament.png',
				isAvailable: true,
				isNew: true,
				hasQualitySign: false,
			},
		],
	},
	{
		wineVintage: 2022,
		wines: [
			{
				year: 2022,
				name: 'Szmaragd',
				color: 'Białe',
				taste: 'Półwytrawne',
				variety: 'Sibera&nbsp;100%',
				alcohol: '11%',
				description:
					'Wino o jasnozłocistej barwie i przyjemnej kwasowości. W zapachu wyczuwalne owoce cytrusowe, a w smaku zielony grejfrut. Dobrze komponuje się z daniami z drobiu, sałatkami i świeżymi serami.',
				imageSrc: './images/wines/szmaragd.png',
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
				imageSrc: './images/wines/szafir.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: true,
			},
			{
				year: 2022,
				name: 'Hematyt',
				color: 'Czerwone',
				taste: 'Wytrawne',
				variety: 'Cabernet&nbsp;Cortis 50%, Rondo&nbsp;50%',
				alcohol: '12%',
				description:
					'Wino o mocnym, czerwonym zabarwieniu, leżakowane w dębowej beczce. Delikatne w smaku, pachnie intensywnie wiśnią, w ustach wyczuwalne aromaty owoców leśnych.',
				imageSrc: './images/wines/hematyt.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
			},
			{
				year: 2022,
				name: 'Malachit',
				color: 'Czerwone',
				taste: 'Wytrawne',
				variety: 'Zweigelt&nbsp;50%, Pinot&nbsp;Noir&nbsp;50%',
				alcohol: '12%',
				description: '',
				imageSrc: './images/wines/malachit.png',
				isAvailable: true,
				isNew: true,
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
