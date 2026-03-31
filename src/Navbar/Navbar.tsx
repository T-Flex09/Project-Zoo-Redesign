import styles from './Navbar.module.css';
import Logo from '/src/assets/Sigla_mov.png';
// import React, {useEffect} from 'react';

export default function Navbar() {

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode');
    }

    return (
        <nav>
            <img className={styles.logo} src={Logo}></img>
            <button className={styles.themeSwitcher} onClick={toggleTheme}>test</button>
        </nav>
    );
}