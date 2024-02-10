/*
Напишіть метод, який буде застосовувати анімацію fade-in і показувати всі зображення з галереї одне за одним з невеликою затримкою після кожного.
     Викликаєте метод через 6 секунд.
     Метод перебору для колекції html елементів запозичіть у масиву :)

    Пример: https://youtu.be/UDql4w8pExs
 */

const randomGallery = {
    container: document.querySelector('.gallery'),
    renderImages(){
        for (let i = 0; i < 100; i++) {
            const html = `
            <div class="gallery__item">
                <img src="https://picsum.photos/200/200?v=${i}" alt="img" />
            </div>
            `
            this.container.insertAdjacentHTML("beforeend", html);
        }
    },
    showImage(image, timeout) {
        setTimeout(() => {
            image.classList.add('fade-in');
            image.style.opacity = 1;
        }, timeout)
    },

    showImages(){
        const imagesCollection = document.getElementsByClassName('gallery__item');
        console.log(imagesCollection);
    }
}

randomGallery.renderImages();
setTimeout(randomGallery.showImages, 5000);
