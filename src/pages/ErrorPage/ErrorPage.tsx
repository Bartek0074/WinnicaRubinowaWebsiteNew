import styles from './ErrorPage.module.scss';

import { useNavigate } from 'react-router-dom';

import { Result } from 'antd';

export default function ErrorPage() {
	const nav = useNavigate();

	const navigateToHome = () => {
		nav('/');
	};
	return (
		<div className={styles.errorPage}>
			<Result
				status='404'
				title='Error 404'
				subTitle='Ups, strona o podanym adresie nie istnieje. Sprawdź czy adres jest poprawny.'
				extra={<button onClick={navigateToHome}>Strona główna</button>}
			/>
		</div>
	);
}
