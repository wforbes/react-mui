import './Header.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MuiSvg from '../assets/mui-svg.jsx'
import { createSvgIcon } from '@mui/material/utils'
import SvgIcon from '@mui/material/SvgIcon'
import reactLogo from '../assets/react.svg'

import { NavLink } from 'react-router-dom'

const MuiIcon = createSvgIcon(
  <MuiSvg />,
  'MuiIcon'
)

export default function Header() {
	const appbarLogoLink = { color: "white!important", textDecoration: "none!important" };
	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography variant="h4" >
					<NavLink to="/" className="appbar-logo-link">
						{"react-mui"}
					</NavLink>
				</Typography>
				<Typography variant="h4" className="appbar-logo-lparen">
					{"("}
				</Typography>
				<a href="https://reactjs.org" target="_blank" style={{display:"inline"}}>
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<Typography variant="h4" className="appbar-logo-dash">
					-
				</Typography>
				<a href="https://mui.com" target="_blank" width="32" height="32" style={{display:"inline"}}>
					<SvgIcon component={MuiIcon} sx={{ width:30, height:32, fill:"white" }} viewBox="0 0 36 32" />
				</a>
				<Typography variant="h4" className="appbar-logo-rparen">
					{")"}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}