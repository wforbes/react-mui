import HomeBanner from '../components/HomeBanner';
import HomeCards from '../components/HomeCards';

export default function HomePage() {
	return (
		<main>
        {/* Hero unit */}
        <HomeBanner />
        <HomeCards />
      </main>
	);
}