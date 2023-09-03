let isImgZoommed = document.querySelector('.gallery');

isImgZoommed.addEventListener('click', (event) => {
    let img = event.target;
    if (img.classList.contains('zoomed-img')) {
        img.classList.remove('zoomed-img');   
    } else {
        img.classList.add('zoomed-img');
    }
});