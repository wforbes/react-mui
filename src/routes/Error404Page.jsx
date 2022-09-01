import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Error404Page() {
	return (
		<main>
			<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth="sm">
					<h2>Page Not Found</h2>
					<p>
						<NavLink to="/">Back to Home page</NavLink>
					</p>
				</Container>
			</Box>
		</main>
	);
}