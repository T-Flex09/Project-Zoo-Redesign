import './Home.css'; 
import { useEffect } from 'react';
import generateHexagonGrid from './hexgrid';

export default function Home() {
    useEffect(() => {
        generateHexagonGrid();
    }, []);

    return (<>
        <h1>Welcome back home nigga ❤️</h1>

        <div className="background-underlay">
            <div className="hex-grid"> </div>
        </div>
    </>);
}