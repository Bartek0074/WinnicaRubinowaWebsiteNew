import styles from './NotAllowedPage.module.scss';

import { Result } from 'antd';

export default function NotAllowedPage() {
	return (
		<div className={styles.notAllowedPage}>
			<Result
				status='403'
				title='Ups, jesteś niepełnoletni!'
				subTitle='Powróć do nas, gdy skończysz 18 lat :)'
			/>
		</div>
	);
}
