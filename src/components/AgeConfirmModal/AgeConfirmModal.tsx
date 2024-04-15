import styles from './AgeConfirmModal.module.scss';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';

import Modal from 'antd/es/modal/Modal';

const AgeConfirmModal = () => {
	const nav = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const cookies = new Cookies();

	const onOk = () => {
		cookies.set('ageConfirm', true, { path: '/' });
		setIsModalOpen(false);
	};
	const onCancel = () => {
		nav('/notAllowed');
	};

	useEffect(() => {
		if (cookies.get('ageConfirm')) {
			setIsModalOpen(false);
		} else {
			setIsModalOpen(true);
		}
	}, [cookies]);

	return (
		<Modal
			closeIcon={false}
			maskClosable={false}
			open={isModalOpen}
			okButtonProps={{ style: { display: 'none' } }}
			cancelButtonProps={{ style: { display: 'none' } }}
		>
			<div className={styles.modal}>
				<p className={styles.text}>Czy jesteś pełnoletni/a?</p>
				<p className={styles.subText}>
					Aby wejść na naszą stronę musisz mieć ukończone 18 lat.
				</p>
				<div className={styles.buttons}>
					<button className={styles.cancelBtn} onClick={onCancel}>
						Nie
					</button>
					<button className={styles.confirmBtn} onClick={onOk}>
						Tak
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default AgeConfirmModal;
