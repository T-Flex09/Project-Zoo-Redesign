import { useEffect, useState } from "react";
import "./Hexgrid.css";

export default function Hexgrid() {
    const [hexList, setHexList] = useState<any[]>([]);
    // const [hexUpdate, setHexUpdate] = useState<boolean>(false);

    function configureHexList() {
        let newHexList: any[] = [];

        let size_scale = Math.max(window.innerWidth / 1536, window.innerHeight / 864);
        const hexWidth = 100 * size_scale;
        const hexHeight = 85 * size_scale;

        const vertSpacing = hexHeight + 6;
        const horizSpacing = hexWidth + 10;

        const cols = Math.ceil(window.innerWidth / horizSpacing) + 1;
        const rows = Math.ceil(window.innerHeight / vertSpacing) + 1;

        for (let r = 0; r < 1.1 * rows; r++) {
            for (let c = 0; c < 1.5 * cols; c++) {

                newHexList.push({
                    width: hexWidth,
                    height: hexHeight,
                    left: c * (horizSpacing - 30 * (size_scale * (size_scale <= 2 ? 1 : 0.9))),
                    top: r * vertSpacing + (c % 2 === 0 ? 1 : -1) * vertSpacing / 4.0,
                    delay: (2 * r * rows + c) * 0.0075
                });
            }
        }

        setHexList(newHexList);
    }

    useEffect(() => {
        configureHexList();

        const handleResize = () => configureHexList();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (<>
        <div className="background-underlay">
            <div className="hex-grid">
                {hexList.map((hex, i) => (
                    <div key={i} className = "hexagon" style={{
                        width: `${hex.width}px`,
                        height: `${hex.height}px`,
                        left: `${hex.left}px`,
                        top: `${hex.top}px`,
                        animationDelay: `${hex.delay}s`
                    }}></div>
                ))}
            </div>
        </div>
    </>);
}