import styles from './CatalogItem.module.scss';
import classnames from 'classnames';

import { Wine } from '../../types/wines';

import { HiArrowSmRight, HiOutlineExclamationCircle } from 'react-icons/hi';

type Props = {
	wine: Wine;
};

export default function CatalogItem({ wine }: Props) {
	const catalogItemClass = classnames(styles.catalogItem, {
		[styles.catalogItemAvailable]: wine.isAvailable,
	});

	return (
		<div className={catalogItemClass}>
			<div className={styles.catalogItemAverse}>
				{wine.isNew ? (
					<div className={styles.badge}>
						<p>Nowość</p>
					</div>
				) : null}
				{!wine.isAvailable ? (
					<div className={styles.unavailableShadow} />
				) : null}
				{wine.hasQualitySign ? <div className={styles.qualitySign}>
					<img src='./images/other/quality.png'/>
				</div> : null}
				<h3 className={styles.heading}>{wine.name}</h3>
				<img
					className={styles.image}
					src={wine.imageSrc}
					alt={`Wino ${wine.name}`}
				/>
				{wine.isAvailable ? (
					<p className={styles.moreInfo}>
						<span>
							<HiArrowSmRight className={styles.icon} />
							Więcej informacji
						</span>
					</p>
				) : (
					<p className={styles.moreInfoNotAvailable}>
						<span>
							<HiOutlineExclamationCircle className={styles.icon} /> Jeszcze
							niedostępne
						</span>
					</p>
				)}
			</div>
			<div className={styles.catalogItemObverse}>
				<h3 className={styles.heading}>{wine.name}</h3>
				<ul className={styles.infoList}>
					<li className={styles.infoItem}>{wine.color}</li>
					<li className={styles.infoItem}>{wine.taste}</li>
					<li className={styles.infoItem}>Odmiana: {wine.variety}</li>
					<li className={styles.infoItem}>Rocznik: {wine.year}</li>
					<li className={styles.infoItem}>Alkohol: {wine.alcohol}</li>
					<li className={styles.infoItem}>{wine.description}</li>
				</ul>
			</div>
		</div>
	);
}
