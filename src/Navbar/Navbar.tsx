import styles from './Navbar.module.css';
import LogoMov from '/src/assets/Sigla_mov.png';
import LogoAlb from '/src/assets/Sigla_alb.png';
import {useState} from 'react';

type PageType = 'home' | 'team' | 'activity' | 'results' | 'sponsors' | 'gallery';

interface NavbarProps {
    setPage: (page: PageType) => void;
}

export default function Navbar({setPage}: NavbarProps) {
    let [themeButtonIcon, setThemeButtonIcon] = useState('☀️');
    let [logo, setLogo] = useState(LogoAlb);
    const [isFading, setIsFading] = useState(false);
    
    function toggleTheme() {
        setIsFading(true); 
        setTimeout(() => {
            document.documentElement.classList.toggle('light-mode');
            setThemeButtonIcon(prev => prev === '☀️' ? '🌙' : '☀️');
            setLogo(prev => prev === LogoMov ? LogoAlb : LogoMov);
            setIsFading(false);
        }, 300);
    }
    
    return (
        <nav>
            <img className={`${styles.logo} ${isFading ? styles.logoFade : ''}`} src={logo} onClick={() => setPage('home')}></img>

            <div className={styles.linksContainer}>
                <button onClick={() => setPage('home')}>Home</button>
                <button onClick={() => setPage('team')}>Our Team</button>
                <button onClick={() => setPage('activity')}>Activity</button>
                <button onClick={() => setPage('results')}>Results</button>
                <button onClick={() => setPage('sponsors')}>Sponsors</button>
                <button onClick={() => setPage('gallery')}>Gallery</button>
            </div>
            
            <button className={styles.themeSwitcher} onClick={toggleTheme}>{themeButtonIcon}</button>
        </nav>
    );
}