let isImgZoommed = document.querySelector('.service-container');

isImgZoommed.addEventListener('click', (event) => {
    let img = event.target;
    if (img.classList.contains('big-img')) {
        img.classList.remove('big-img');   
    } else {
        img.classList.add('big-img');
    }
});