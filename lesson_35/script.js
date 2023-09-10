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
            <div class="card-body public">
                <h5 class="card-title name">${element.name}</h5>
                <p class="card-text email">email: ${element.email}</p>
                <p class="card-text gender">gender: ${element.gender}</p>
                <p class="card-text status">status: ${element.status}</p>
                <a href="index1.html" class="btn btn-primary" onclick="getContent('${element.id}')">Open all posts of this User</a>
            </div>
            `;
        });
    });
}

function getContent(id) {
    localStorage.setItem('userId', id);
}
