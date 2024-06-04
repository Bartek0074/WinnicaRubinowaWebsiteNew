import styles from './GallerySection.module.scss';

import { Image } from 'antd';

import Heading from '../Heading/Heading';

const GallerySection = () => {
	return (
		<div className={styles.gallerySection}>
			<Heading text='Galeria' size='large' />
			<Image.PreviewGroup>
				<div className={styles.images}>
					<div className={styles.imageFirst}>
						<Image
							width={'100%'}
							height={'100%'}
							src='./images/gallery/gallery1.jpg'
						/>
					</div>
					<div className={styles.imageSecond}>
						<Image
							width={'100%'}
							height={'100%'}
							src='./images/gallery/gallery2.jpg'
						/>
					</div>
					<div className={styles.imageThird}>
						<Image
							width={'100%'}
							height={'100%'}
							src='./images/gallery/gallery3.jpg'
						/>
					</div>

					<div className={styles.imageFourth}>
						<Image
							width={'100%'}
							height={'100%'}
							src='./images/gallery/gallery4.jpg'
						/>
					</div>
					<div className={styles.imageFifth}>
						<Image
							width={'100%'}
							height={'100%'}
							src='./images/gallery/gallery5.png'
						/>
					</div>
					<div className={styles.imageSixth}>
						<Image
							width={'100%'}
							height={'100%'}
							src='./images/gallery/gallery6.jpg'
						/>
					</div>
				</div>
			</Image.PreviewGroup>
		</div>
	);
};

export default GallerySection;
