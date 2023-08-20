// let galleryContainer = document.querySelector('.gallery');
const changeClass = (element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('big-img')) {
            element.classList.remove('big-img');   
        } else {
            element.classList.add('big-img');
        }
    });
};

module.exports = changeClass;