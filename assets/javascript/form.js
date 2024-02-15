// form post
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const illnessSelect = document.getElementById("illness");
const citySelect = document.getElementById("city");
const timeInp = document.getElementById("timeInp");
const messageInp = document.getElementById("messageInp");
const form = document.querySelector("form");

function rezervationPost(event) {
  event.preventDefault();
  axios
    .post(`https://655dd2b79f1e1093c599f093.mockapi.io/project`, {
      fullname: fullname.value,
      email: email.value,
      city: citySelect.value,
      time: timeInp.value,
      illness: illnessSelect.value,
      message: messageInp.value,
      durum: "beklemede",
    })
    .then((res) => {
      console.log(res);
      form.reset();
      getClient()
    });
}

form.addEventListener("submit", rezervationPost);

const clientTablo = document.getElementById("clientTablo");

async function getClient() {
  const res = await axios.get(
    `https://655dd2b79f1e1093c599f093.mockapi.io/project`
  );
  const data = res.data;
 var db = data;
  clientTablo.innerHTML =``
  db.forEach((item) => {
    let tableTr = document.createElement("tr");
    tableTr.innerHTML = `
      <th scope="row">${item.id}</th>
      <td>${item.fullname}</td>
      <td class="col-nan" >${item.email}</td>
      <td class="col-nan" >${item.illness.substr(0,20)}</td>
      <td class="col-nan" >${item.time.substr(-5)}</td>
      <td class="col-nan" >${item.time.substr(0,10)}</td>
      <td><button data-id="${item.id}" class="btn ${item.durum === 'beklemede' ? 'text-primary' : item.durum === 'kabul edildi' ? 'text-success' : 'text-danger'}">${item.durum}</button></td>
    `;
    clientTablo.appendChild(tableTr);
  });
  db.forEach((item) => {
    updateButtonColor(item.id, item.durum);
  });
}

getClient()

async function updateButtonColor(id, newStatus) {
    const button = document.querySelector(`#clientTablo button[data-id="${id}"]`);
  
    if (button) {
      button.textContent = newStatus;
  
      if (newStatus === 'kabul edildi') {
        button.classList.add('text-success');
      } else if (newStatus === 'reddedildi') {
        button.classList.add('text-danger');
      } else {
        button.classList.add('text-primary');
      }
    }
  }
  