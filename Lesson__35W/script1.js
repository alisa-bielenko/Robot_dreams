window.addEventListener('DOMContentLeaded', getContentPost());

let postsHTML = document.querySelector('.public-content');

function getContentPost() {
    let idLocal = localStorage.getItem('userId');
    fetch(`https://gorest.co.in/public/v2/users/${idLocal}/posts`)
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
        console.log(data);
        if (data.length === 0){
            postsHTML.innerHTML += `
            <div class="alert alert-warning" role="alert">
            Sorry, User doesn't have any posts!!!
            </div>
            `;
        } else {
            data.forEach((element) => {
                postsHTML.innerHTML += `
                <div class="list">
                    <div class="list-body">
                        <h4 class="list-title">${element.title}</h4>
                        <p class="list-text">${element.body}</p>
                    </div>
                </div>
                `;
            });
        }

    })
};