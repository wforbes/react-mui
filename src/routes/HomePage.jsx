import HomeBanner from '../components/HomeBanner';
import HomeCards from '../components/HomeCards';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function HomePage() {
	return (
		<main>
        {/* Hero unit */}
        <HomeBanner />
        <HomeCards />
      </main>
	);
}