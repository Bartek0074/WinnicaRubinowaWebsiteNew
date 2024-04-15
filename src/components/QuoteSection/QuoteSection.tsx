import styles from './QuoteSection.module.scss';

import WhiteBlocks from '../WhiteBlocks/WhiteBlocks';

const QuoteSection = () => {
	return (
		<div className={styles.quote}>
			<WhiteBlocks />
			<div className={styles.text}>
				<p className={styles.quoteText}>
					"Wino czyni każdy posiłek uroczystością, każdy stół wspanialszym,
					każdy dzień bardziej udanym."
				</p>
				<p className={styles.quoteAuthor}>Andre L. Simon</p>
			</div>
		</div>
	);
};

export default QuoteSection;
