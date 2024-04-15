import styles from './WhiteBlocks.module.scss';
import classnames from 'classnames';

type Props = {
	isLeftGray?: boolean;
};

export default function WhiteBlocks({ isLeftGray = false }: Props) {

	const whiteBlockLeftClass = classnames(styles.whiteBlockLeft, {
		[styles.whiteBlockLeftGray]: isLeftGray,
	});

	return (
		<>
			<div className={styles.whiteBlockRight} />
			<div className={whiteBlockLeftClass} />
		</>
	);
}
