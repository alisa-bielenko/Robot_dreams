// Літаючий корабель
// При натисканні на стрілку вгору переміщати корабель вгору і повертати носом вгору.
// При натисканні на стрілку праворуч переміщати корабель праворуч і повертати носом праворуч.
// При натисканні на стрілку вниз переміщати корабель вниз і повертати носом вниз.
// При натисканні на стрілку вліво переміщати корабель вліво і повертати носом вліво.

const spaceShip = document.querySelector('#space-ship');

const step = 20; 

document.addEventListener('keydown', (event) => {
    let x = spaceShip.offsetLeft;
    let y = spaceShip.offsetTop;

    switch (event.key) {
        case 'ArrowUp':
            spaceShip.style.top = (y - step) + 'px';
            break;
        case 'ArrowRight':
            spaceShip.style.left = (x + step) + 'px';
            break;
        case 'ArrowDown':
            spaceShip.style.top = (y + step) + 'px';
            break;
        case 'ArrowLeft':
            spaceShip.style.left = (x - step) + 'px';
            break;
    }

    const rotation = getRotation(event.key);
    spaceShip.style.transform = 'rotate(' + rotation + 'deg)';
});

function getRotation(key) {
    switch (key) {
        case 'ArrowUp':
            return 0;
        case 'ArrowRight':
            return 90;
        case 'ArrowDown':
            return 180;
        case 'ArrowLeft':
            return -90;
        default:
            return 0;
    }
}