// CRUD:
// Read - method GET
window.addEventListener('DOMContentLeaded', getAllBuyList());

function getAllBuyList() {
    fetch('https://rd-api-bbe0d-default-rtdb.europe-west1.firebasedatabase.app/listBuying.json')
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
        let listBuying = [];
        for (const key in data) {
          listBuying.push({...data[key], id: key});
        }
        return listBuying;
    })
    .then((listBuying) => {
        listBuying.forEach(tobuyToHTML);
    });
};

function tobuyToHTML(tobuy) {
    const tobuyList = document.getElementById('listBuying');
    tobuyList.insertAdjacentHTML('beforeend', `
      <div class="list-item">
         <div class="form-check list-location" id="tobuy${tobuy.id}">
            <label class="form-check-label">
              <input onchange="toggleCompleteTobuy('${tobuy.id}')" type="checkbox" class="form-check-input" ${tobuy.completed && 'checked'}>
              ${tobuy.title}
            </label>
         </div>
         <div class="button-container">
           <button onclick="deleteTobuy('${tobuy.id}')" type="button" class="btn btn-outline-danger">Delete</button>
           <button onclick="editTobuy('${tobuy.id}', '${tobuy.title}')" type="button" class="btn btn-outline-warning">Edit</button>
          </div>
        </div>
    `);
};

// method POST 
document.getElementById('addTobuy').addEventListener('click', () => {
    const input = document.getElementById('tobuyText');
    const title = input.value;

    if (title) {
        fetch('https://rd-api-bbe0d-default-rtdb.europe-west1.firebasedatabase.app/listBuying.json', {
            method: "POST",
            body: JSON.stringify({
                title, 
                completed: false})
        }).then(respons => {
            return respons.json();
        }).then(() => {
            input.value = '';
            location.reload();
        });
    };
});

// method DELETE
function deleteTobuy(id) {
    fetch(`https://rd-api-bbe0d-default-rtdb.europe-west1.firebasedatabase.app/listBuying/${id}.json`, {
        method: "DELETE"})
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
      if (data === data) {
        document.getElementById(`tobuy${id}`).remove();}
    });
};

//  method PATCH
function toggleCompleteTobuy (id) {
    const completed = document.querySelector(`#tobuy${id} input`).checked;
    fetch(`https://rd-api-bbe0d-default-rtdb.europe-west1.firebasedatabase.app/listBuying/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({completed})
    })
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
        console.log(data)
    });
};

//  method PUT
function editTobuy(id, currentTitle) {
  const newTitle = prompt("Enter the new title:", currentTitle);

  if (newTitle) {
      fetch(`https://rd-api-bbe0d-default-rtdb.europe-west1.firebasedatabase.app/listBuying/${id}.json`, {
          method: "PUT",
          body: JSON.stringify({ title: newTitle })
      })
      .then(response => response.json())
      .then(data => {
          if (data) {
              const tobuyElement = document.getElementById(`tobuy${id}`);
              tobuyElement.querySelector('.form-check-label').textContent = newTitle;
          }
      });
  }
}
