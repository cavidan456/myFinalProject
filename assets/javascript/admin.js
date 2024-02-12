const rezervation = document.getElementById("rezervation");

async function rezervationGet() {
  const res = await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/project`)
  const data = res.data;
  db = data;
  db.forEach((item) => {
    let box = document.createElement("div");
    box.className = "col-4 mb-3"
    box.innerHTML = `
    <h2>${item.fullname}</h2>
<p>${item.email}</p>
<p>${item.illness}</p>
<p>${item.city}</p>
<p>${item.time}</p>
<span>${item.message}</span>
<button onclick="myfunk(${item.id})">Kabul Et</button>
<button onclick="myfunk2(${item.id})">Redd Et</button>
    `;
    rezervation.appendChild(box)
  });
}

rezervationGet()

function myfunk(id) {
  const randevu = db.find(item => item.id == id);
  if (randevu.durum == "beklemede") {
    alert(`${randevu.fullname} isimli hasta kabul edildi.`);
    randevu.durum = "kabul edildi";
    updateReservation(id, randevu);
  } else {
    alert(`${randevu.fullname} isimli hastanın randevusu zaten kabul edilmiş veya reddedilmiş.`);
  }
}

async function myfunk2(id) {
  const randevu = db.find(item => item.id == id);
  if (randevu.durum == "beklemede") {
    alert(`${randevu.fullname} isimli hasta reddedildi.`);
    randevu.durum = "reddedildi";
    updateReservation(id, randevu);
  } else {
    alert(`${randevu.fullname} isimli hastanın randevusu zaten kabul edilmiş veya reddedilmiş.`);
  }
}

async function updateReservation(id, updatedData) {
  try {
    const res = await axios.put(`https://655dd2b79f1e1093c599f093.mockapi.io/project/${id}`, updatedData);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
