import styles from './Heading.module.scss';
import classnames from 'classnames';

type Props = {
	text: string;
	type?: 'primary' | 'secondary' | 'white';
	size?: 'small' | 'medium' | 'large';
};

export default function Heading({ text = 'Heading', type = 'primary', size='medium' }: Props) {
	const headingClass = classnames(styles.heading, {
		[styles.headingPrimary]: type === 'primary',
		[styles.headingXecondary]: type === 'secondary',
		[styles.headingWhite]: type === 'white',
		[styles.headingSmall]: size === 'small',
		[styles.headingMedium]: size === 'medium',
		[styles.headingLarge]: size === 'large',
	});

	return <p className={headingClass}>{text}</p>;
}
