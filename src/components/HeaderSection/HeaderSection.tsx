import styles from './HeaderSection.module.scss';

const HeaderSection = () => {
	return (
		<div className={styles.header}>
			<img src='./images/logo/logo-small.png' alt='Logo Winnicy Rubinowej' />
			<h1 className={styles.heading}>
				<span>w</span>innica <span>r</span>ubinowa
			</h1>
		</div>
	);
};

export default HeaderSection;
