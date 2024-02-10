/**
 * @description
 */
const startTitleCountdown = (seconds, titleText) => {
    const title = document.querySelector('.title');
    const counter = document.querySelector('.counter');
    let currentSecond = seconds;
    counter.innerHTML = currentSecond;

    const interval = setInterval(() => {
        currentSecond--;

        if (currentSecond <= 0) {
            title.innerHTML = titleText;
            clearInterval(interval);
            return;
        }
        counter.innerHTML = currentSecond;

    }, 1000);
}

startTitleCountdown(2, 'GALLERY');
