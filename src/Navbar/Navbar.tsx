import styles from './Navbar.module.css';
// import React, {useEffect} from 'react';

export default function Navbar() {

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode');
    }

    return (
        <nav>
            <button className={styles.themeSwitcher} onClick={toggleTheme}>test</button>
        </nav>
    );
}