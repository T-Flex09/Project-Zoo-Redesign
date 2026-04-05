import styles from './Navbar.module.css';
import LogoMov from '/src/assets/Sigla_mov.png';
import LogoAlb from '/src/assets/Sigla_alb.png';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
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
    
    const navigate = useNavigate();

    return (<>
        <nav>
            <img className={`${styles.logo} ${isFading ? styles.logoFade : ''}`} src={logo} onClick={() => navigate('/home')}></img>

            <div className={styles.linksContainer}>
                <button onClick={() => navigate('/home')}>Home</button>
                <button onClick={() => navigate('/team')}>Our Team</button>
                <button onClick={() => navigate('/activity')}>Activity</button>
                <button onClick={() => navigate('/results')}>Results</button>
                <button onClick={() => navigate('/sponsors')}>Sponsors</button>
                <button onClick={() => navigate('/gallery')}>Gallery</button>
            </div>
            
            <button className={styles.themeSwitcher} onClick={toggleTheme}>{themeButtonIcon}</button>
        </nav>
    </>);
}