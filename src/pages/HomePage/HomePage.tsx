import ScrollSpy from 'react-ui-scrollspy';

import AgeConfirmModal from '../../components/AgeConfirmModal/AgeConfirmModal';

import Navigation from '../../components/Navigation/Navigation';

import Header from '../../components/HeaderSection/HeaderSection';
import QuoteSection from '../../components/QuoteSection/QuoteSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import CatalogSection from '../../components/CatalogSection/CatalogSection';
import ContactInfoSection from '../../components/ContactInfoSection/ContactInfoSection';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
	return (
		<ScrollSpy>
			<Navigation />
			<header id='home'>
				<Header />
				<QuoteSection />
				<WelcomeSection />
			</header>
			<div id='about'>
				<AboutSection />
			</div>
			<div id='gallery'>
				<GallerySection />
			</div>
			<div id='catalog'>
				<CatalogSection/>
			</div>
			<div id='contact'>
				<ContactInfoSection />
			</div>
			<Footer />
			<AgeConfirmModal />
		</ScrollSpy>
	);
}
