import styles from './Navbar.module.css';
import Logo from '/src/assets/Sigla_mov.png';
import {useState} from 'react';

type PageType = 'home' | 'team' | 'activity' | 'results' | 'sponsors' | 'gallery';

interface NavbarProps {
  setPage: (page: PageType) => void;
}

export default function Navbar({setPage}: NavbarProps) {

    let [themeButtonIcon, setThemeButtonIcon] = useState('☀️');

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode');
        setThemeButtonIcon(themeButtonIcon == '☀️' ? '🌙' : '☀️');
    }

    return (
        <nav>
            <img className={styles.logo} src={Logo} onClick={() => setPage('home')}></img>

            <div className='linksContainer'></div>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('team')}>Our Team</button>
            <button onClick={() => setPage('activity')}>Activity</button>
            <button onClick={() => setPage('results')}>Results</button>
            <button onClick={() => setPage('sponsors')}>Sponsors</button>
            <button onClick={() => setPage('gallery')}>Gallery</button>

            <button className={styles.themeSwitcher} onClick={toggleTheme}>{themeButtonIcon}</button>
        </nav>
    );
}