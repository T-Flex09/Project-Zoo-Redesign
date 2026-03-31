import styles from './Navbar.module.css';
import Logo from '/src/assets/Sigla_mov.png';
import React, {useState} from 'react';

export default function Navbar() {

    let [themeButtonIcon, setThemeButtonIcon] = useState('✦');

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode');
        setThemeButtonIcon(themeButtonIcon == '✦' ? '⏾' : '✦');
    }

    return (
        <nav>
            <img className={styles.logo} src={Logo}></img>
            <button className={styles.themeSwitcher} onClick={toggleTheme}>{themeButtonIcon}</button>
        </nav>
    );
}