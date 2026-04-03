export default function generateHexagonGrid() {
    const grid = document.querySelector(".hex-grid");
    if (!grid) return;

    let already_hexagons = grid.querySelectorAll(".hexagon");
    if (already_hexagons.length > 0) {
        already_hexagons.forEach(
            hex => hex.remove()
        );
    }

    let size_scale = Math.max(window.innerWidth / 1536, window.innerHeight / 864);
    const hexWidth = 100*size_scale;
    const hexHeight = 85*size_scale;
    // const hexLatura = 49.07; // 85 / sqrt3
    const vertSpacing = hexHeight + 6;
    const horizSpacing = hexWidth + 10;

    // Calculate how many we need to cover the screen
    const cols = Math.ceil(window.innerWidth / horizSpacing) + 1;
    const rows = Math.ceil(window.innerHeight / vertSpacing) + 1;

    for (let r = 0; r < 1.1 * rows; r++) {
        for (let c = 0; c < 1.5 * cols; c++) {
            let hexagon = document.createElement("div");
            hexagon.classList.add("hexagon");	
            
            hexagon.style.width = `${hexWidth}px`;
            hexagon.style.height = `${hexHeight}px`;

            hexagon.style.left = `${c * (horizSpacing - 30 * (size_scale * ( size_scale <= 2 ? 1 : .9 )))}px`;
            hexagon.style.top = `${ r * vertSpacing + (c % 2 == 0 ? 1 : -1) * vertSpacing / 4.0}px`;
            hexagon.style.animationDelay = `${(2 * r * rows + c) * 0.0075}s`;
            
            grid.appendChild(hexagon);
        }
    }
}

// window.addEventListener('load', () => {
//     const main_title = document.querySelector(".main-title-img");
//     if (!main_title) return;

//     setTimeout(() => {
//         generateHexagonGrid();
//     }, 1250);
// });