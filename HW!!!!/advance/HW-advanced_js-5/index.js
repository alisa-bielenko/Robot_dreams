"use strict";

const container = document.querySelector(".cards");
const loader = document.querySelector(".loader");
const addPostsBtn = document.querySelector(".header__add-post-btn");
const opacity = document.querySelector(".opacity");

class Card {
    constructor(firstName, secondName, email, heading, text, postId, editCard) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.heading = heading;
        this.text = text;
        this.postId = postId;
        this.editCard = editCard;
    }

    cardsContainer = document.createElement("div");
    userInfo = document.createElement("div");
    userContent = document.createElement("div");
    userHeading = document.createElement("div");
    userText = document.createElement("div");
    btnContainer = document.createElement("div");
    close = document.createElement("button");
    edit = document.createElement("button");


    createElements() {
        this.cardsContainer.className = "cards__card";
        this.userInfo.className = "user-info";
        this.userContent.className = "user-content";
        this.userHeading.className = "user-content__heading";
        this.userText.className = "user-content__text";
        this.userHeading.innerText = this.heading;
        this.userText.innerText = this.text;
        this.btnContainer.className = "user-info__btn-conteiner";
        this.close.className = "user-info__delete-btn";
        this.close.innerHTML = 'Delete';
        this.edit.className = "user-info__edit-btn";
        this.edit.innerHTML = 'Edit';
    }

    addListener() {
        this.close.addEventListener("click", this.delete.bind(this));
        this.edit.addEventListener("click", () => {
            this.editCard(this);
        });
    }

    render() {
        this.createElements();
        this.addListener();
        this.cardsContainer.innerHTML = "";
        this.userInfo.innerHTML = "";
        this.userInfo.insertAdjacentHTML("afterbegin",
            `<div class="user-info__fullname">
             <div class="user-info__name">${this.firstName}</div>
             <div class="user-info__surname">${this.secondName}</div>
             </div>
             <div class="user-info__email">${this.email}</div>
            `
        );
        this.userInfo.append(this.btnContainer);
        this.cardsContainer.append(this.userInfo);
        this.cardsContainer.append(this.userContent);
        this.userContent.append(this.userHeading, this.userText);
        this.userContent.append(this.btnContainer);
        this.btnContainer.append(this.edit, this.close);
        container.prepend(this.cardsContainer);
    }

    delete() {
        axios
            .delete(`https://ajax.test-danit.com/api/json/posts/${this.postId}`)
            .then(({ status }) => {
                if (status === 200) {
                    this.cardsContainer.remove();
                }
            })
            .catch(() => {
                alert(
                    "CREATED POSTS ARE NOT ADDED TO THE SERVER, THEREFORE THE DELETE BUTTON DOESN'T WORK IF YOU WANT TO REMOVE A POST - RELOAD THE PAGE!"
                );
            });
    }
}

class Modal {
    constructor(handleSubmit, header) {
        this.handleSubmit = handleSubmit;
        this.header = header;
    }
    modal = document.createElement("div");
    closeBtn = document.createElement("div");

    inputLabel = document.createElement("label");
    textAreaLabel = document.createElement("label");

    inputsContainer = document.createElement("div");
    input = document.createElement("input");

    textArea = document.createElement("textarea");
    submitBtn = document.createElement("button");
    heading = document.createElement("h2");

    createElements() {
        this.modal.className = "modal";

        this.closeBtn.className = "modal__close-btn";

        this.inputsContainer.className = "modal__inputs";

        this.input.className = "modal__header";
        this.input.name = "header";
        this.input.type = "text";
        this.inputLabel.innerText = "Title";

        this.textArea.className = "modal__text";
        this.textArea.name = "text";
        this.textAreaLabel.innerText = "Text";

        this.submitBtn.className = "modal__submit-btn";
        this.submitBtn.innerText = "Submit";

        this.heading.className = "modal__header";
        this.heading.innerText = this.header;
    }

    addEventListeners() {
        this.closeBtn.addEventListener("click", this.exit.bind(this));
        opacity.addEventListener("click", this.exit.bind(this));
        this.submitBtn.addEventListener("click", () => {
            this.handleSubmit(this);
            this.exit();
        });
    }

    render() {
        this.createElements();
        this.addEventListeners();

        this.modal.append(
            this.heading,
            this.closeBtn,
            this.inputsContainer,
            this.submitBtn
        );

        this.inputsContainer.append(this.inputLabel, this.textAreaLabel);

        this.inputLabel.append(this.input);
        this.textAreaLabel.append(this.textArea);
        container.append(this.modal);
        opacity.style.display = "block";
    }
    exit() {
        this.modal.remove();
        opacity.style.display = "none";
    }
}

function handleSubmit() {
    axios
        .post("https://ajax.test-danit.com/api/json/posts", {
            userId: 1,
            title: this.input.value,
            body: this.textArea.value,
        })
        .then(({ data: { id, userId, title, body }, status }) => {
            if (status === 200) {
                axios
                    .get("https://ajax.test-danit.com/api/json/users")
                    .then(({ data: usersData }) => {
                        const { name, email } = usersData.find(({ id }) => id === userId);
                        const [firstName, secondName] = name.split(" ");
                        new Card(
                            firstName,
                            secondName,
                            email,
                            title,
                            body,
                            id,
                            editCard
                        ).render();
                    });
            }
        });
}

function editCard(card) {
    new Modal(editCardSubmit, "Edit post").render();
    function editCardSubmit(modal) {
        axios
            .put(`https://ajax.test-danit.com/api/json/posts/${card.postId}`, {
                userId: card.userId,
                title: modal.input.value,
                body: modal.textArea.value,
            })
            .then(({ status }) => {
                if (status === 200) {
                    card.heading = modal.input.value;
                    card.text = modal.textArea.value;
                    card.createElements();
                }
            })
            .catch(() => {
                alert(
                    "CREATED POSTS ARE NOT ADDED TO THE SERVER, THEREFORE THE DELETE BUTTON DOESN'T WORK IF YOU WANT TO REMOVE A POST - RELOAD THE PAGE!"
                );
            });
    }
}

addPostsBtn.addEventListener("click", () => {
    new Modal(handleSubmit, "Create new post").render();
});
axios
    .get("https://ajax.test-danit.com/api/json/users")
    .then(({ data: usersData }) => {
        axios
            .get("https://ajax.test-danit.com/api/json/posts")
            .then(({ data: postsData }) => {
                loader.style.display = "none";
                postsData.forEach(({ id, userId, title, body }) => {
                    const { name, email } = usersData.find(({ id }) => id === userId);
                    const [firstName, secondName] = name.split(" ");
                    new Card(
                        firstName,
                        secondName,
                        email,
                        title,
                        body,
                        id,
                        editCard
                    ).render();
                });
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    })
    .catch((error) => {
        console.error("Error fetching users:", error);
    });