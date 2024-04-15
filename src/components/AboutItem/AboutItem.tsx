import styles from './AboutItem.module.scss';
import classnames from 'classnames';

type Props = {
	title: string;
	text: string;
	imageSrc: string;
	imageAlt?: string;
	imagePosition?: 'left' | 'right' ;
};

export default function AboutItem({
	title = 'Title',
	text = 'Heading',
	imageSrc,
	imageAlt,
	imagePosition = 'left',
}: Props) {
	const aboutItemClasses = classnames(styles.aboutItem, {
		[styles.aboutItemRight]: imagePosition === 'right',
	});

	return (
		<div className={aboutItemClasses}>
			<div className={styles.image}>
				<img src={imageSrc} alt={imageAlt} />
			</div>
			<div className={styles.info}>
				<h2 className={styles.heading}>{title}</h2>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	);
}
