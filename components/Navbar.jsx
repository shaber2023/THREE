import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import style from '../styles/nav.module.css'

const Navbar = () => {
  return (
    <div>
       <AppBar position="static">
        <Toolbar>
            <div>
            <Typography>SHABER AHMAD</Typography>
            </div>
            <div className={style.mynav}>
            <Link className={style.nav} href='/'>Home</Link>
            <Link className={style.nav} href='/about'>About</Link>
            <Link className={style.nav} href='/contact'>Contact</Link>
            </div>
        
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar