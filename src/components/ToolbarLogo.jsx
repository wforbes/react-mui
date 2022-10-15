import React from 'react'
import styles from './Header.module.css'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

import MuiSvg from '../assets/mui-svg.jsx'
import { createSvgIcon } from '@mui/material/utils'
import SvgIcon from '@mui/material/SvgIcon'
import reactLogo from '../assets/react.svg'

const MuiIcon = createSvgIcon(
  <MuiSvg />,
  'MuiIcon'
)

export default function ToolbarLogo(){

	//const appbarLogoLink = { color: "white!important", textDecoration: "none!important" };
	let theme = createTheme()
	//theme = responsiveFontSizes(theme)

	return (
		<div>
			<Typography variant="h4">
				<NavLink to="/" className={styles['appbar-logo-link']}>
					{"react-mui"}
				</NavLink>
			</Typography>
			<Typography variant="h4" className={styles['appbar-logo-lparen']}>
				{"("}
			</Typography>
			<a href="https://reactjs.org" target="_blank" style={{float:"left"}}>
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
			<Typography variant="h4" className={styles['appbar-logo-dash']}>
				-
			</Typography>
			<a href="https://mui.com" target="_blank" width="32" height="32" style={{float:"left"}}>
				<SvgIcon component={MuiIcon} sx={{ width:30, height:32, fill:"white" }} viewBox="0 0 36 32" />
			</a>
			<Typography variant="h4" className={styles['appbar-logo-rparen']}>
				{")"}
			</Typography>
		</div>
	)
}