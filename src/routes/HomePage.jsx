import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import reactLogo from '../assets/react.svg'
import MuiSvg from '../assets/mui-svg.jsx'
import { createSvgIcon } from '@mui/material/utils'
import SvgIcon from '@mui/material/SvgIcon'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MuiIcon = createSvgIcon(
	<MuiSvg />,
	'MuiIcon'
)

export default function HomePage() {
	return (
		<main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          	<Grid container spacing={2} justifyContent="center">
              <Grid item>
                <a href="https://reactjs.org" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </Grid>
              <Grid item>
                <a href="https://mui.com" target="_blank" width="32" height="32">
                  <SvgIcon component={MuiIcon} sx={{ width:30, height:32, fill:"#007FFF" }} viewBox="0 0 36 32" />
                </a>
              </Grid>
            </Grid>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              react-mui
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              <Link href="https://github.com/wforbes/react-mui" color="inherit" target="_blank">Source code on Github.com</Link>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              This is a practice project meant to learn React.js with the Material UI framework.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
	);
}