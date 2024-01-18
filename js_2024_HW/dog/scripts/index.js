const btn = document.querySelector('button');
const img = document.querySelector('.dog');
const span = document.querySelector('.dog span');

btn.addEventListener("click", () => {
    img.classList.add("jump");
    btn.disabled = true;

    setTimeout(() => {
        span.style.display = "block";
    }, 500);

    setTimeout(() => {
        span.style.display = "none";
    }, 1000);

    setTimeout(() => {
        img.classList.remove("jump");
        btn.disabled = false;
    }, 2000);
});