import styles from './CatalogSection.module.scss';

import Heading from '../Heading/Heading';
import { WineVintage } from '../../types/wines';
import CatalogItem from '../CatalogItem/CatalogItem';

const wineVintages: WineVintage[] = [
	{
		wineVintage: 2024,
		wines: [
			{
				year: 2024,
				name: 'Turkus',
				color: 'Białe',
				taste: 'Półsłodkie',
				variety:
					'Solaris&nbsp;25%, Jutrzenka&nbsp;25%, Hibernal&nbsp;25%, Johanniter&nbsp;25%',
				alcohol: '11.5%',
				description: 'Wino o jasnożółtym zabarwieniu, delikatne w smaku. Pachnie intensywnie owocami cytrusowymi i świeżym jabłkiem, w ustach czuć grejpfruta. Doskonale komponuje się z deserami i niektórymi serami.',
				imageSrc: './images/wines/turkus.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
				image: {
					height: '83.5%',
					top: '51.5%',
				},
			},
			{
				year: 2024,
				name: 'Diament',
				color: 'Różowe',
				taste: 'Półsłodkie',
				variety:
					'Regent&nbsp;100%',
				alcohol: '11.5%',
				description: 'Przyjemne, lekkie wino o różowym zabarwieniu. W zapachu, a także smaku mocno wyczuwalna truskawka. Jest doskonałym wyborem do lekkich potraw, sałatek i niektórych deserów.',
				imageSrc: './images/wines/diament.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
				image: {
					height: '81.5%',
					top: '53%',
				},
			},
		],
	},
	{
		wineVintage: 2023,
		wines: [
			{
				year: 2023,
				name: 'Cytryn',
				color: 'Białe',
				taste: 'Półsłodkie',
				variety: 'Hibernal&nbsp;100%',
				alcohol: '11%',
				description:
					'Wino białe półsłodkie o jasnożółtej barwie i intensywnym aromacie zielonego jabłka i cytrusów. W smaku lekko pikantne, z nutami świeżych jabłek i skórki cytryny.',
				imageSrc: './images/wines/cytryn.png',
				isAvailable: true,
				isNew: true,
				hasQualitySign: false,
				image: {
					height: '83.5%',
					top: '52%',
				},
			},
			{
				year: 2023,
				name: 'Agat',
				color: 'Białe',
				taste: 'Wytrawne',
				variety: 'Riesling&nbsp;45%, Johanniter&nbsp;30%, Sibera&nbsp;25%',
				alcohol: '11%',
				description:
					'Wino białe wytrawne, o jasnosłomkownej barwie i wysokiej kwasowości. W nosie i ustach dominują aromaty świeżych jabłek, cytryny i grejpfruta. Idealne do białych mięs, ryb, owoców morza oraz serów.',
				imageSrc: './images/wines/agat.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
				image: {
					height: '79.5%',
					top: '52.5%',
				},
			},
		],
	},
	{
		wineVintage: 2022,
		wines: [
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
				image: {
					height: '79%',
					top: '52%',
				},
			},
			{
				year: 2022,
				name: 'Rubin',
				color: 'Czerwone',
				taste: 'Wytrawne',
				variety: 'Rondo&nbsp;100%',
				alcohol: '11%',
				description:
					'Wino leżakowane w dębowej beczce o delikatnym smaku oraz wyczuwalnym aromacie czarnej porzeczki oraz aronii.',
				imageSrc: './images/wines/rubin.png',
				isAvailable: true,
				isNew: false,
				hasQualitySign: false,
				image: {
					height: '79%',
					top: '52%',
				},
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
