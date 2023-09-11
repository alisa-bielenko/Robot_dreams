document.addEventListener('DOMContentLoaded', function() {
    getAllPublic();
});

let publicHTML = document.querySelector('.public');

function getAllPublic() {
    fetch("https://gorest.co.in/public/v2/users").then(response => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            publicHTML.innerHTML += `
            <div class="list-body public">
                <h5 class="list-title name">${element.name}</h5>
                <p class="list-text email">email: ${element.email}</p>
                <p class="list-text gender">gender: ${element.gender}</p>
                <p class="list-text status">status: ${element.status}</p>
                <a href="index1.html" class="btn btn-primary" onclick="getContent('${element.id}')">Open all posts of the User</a>
            </div>
            `;
        });
    });
}

function getContent(id) {
    localStorage.setItem('userId', id);
}
