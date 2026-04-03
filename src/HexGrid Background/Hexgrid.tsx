import { useEffect } from "react";
import styles from "./Hexgrid.module.css";
import generateHexagonGrid from './hexgrid.ts';

export default function Hexgrid() {
    useEffect(() => {
        generateHexagonGrid();
    }, []);

    return (<>
        <div className={styles.backgroundUnderlay}>
            <div className={styles.hexGrid}> </div>
        </div>
    </>);
}