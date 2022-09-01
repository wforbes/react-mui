import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import reactLogo from '../assets/react.svg'
import MuiSvg from '../assets/mui-svg.jsx'
import { createSvgIcon } from '@mui/material/utils'
import SvgIcon from '@mui/material/SvgIcon'

const MuiIcon = createSvgIcon(
	<MuiSvg />,
	'MuiIcon'
)

export default function HomeBanner() {
	return (
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
	);
}