const rezervation = document.getElementById("rezervation");

async function rezervationGet() {
  const res = await axios.get(
    `https://655dd2b79f1e1093c599f093.mockapi.io/project`
  );
  const data = res.data;
  db = data;
  db.forEach((item) => {
    let box = document.createElement("tr");
    box.innerHTML = `
    <th scope="row">${item.id}</th>
    <td>${item.fullname}</td>
    <td>${item.email}</td>
    <td>${item.illness.substr(0,20)}...</td>
    <td>${item.time.substr(-5)}</td>
    <td>${item.time.substr(0,10)}</td>
    <td>
      <button id="accept" onclick="funkAcceptance(${item.id})">Accept</button>
      <button id="reject" onclick="funkReject(${item.id})">Reject</button>
    </td>
    `;
    rezervation.appendChild(box);
  });
}

rezervationGet()

function funkAcceptance(id) {
  const randevu = db.find((item) => item.id == id);
  if (randevu.durum == "beklemede") {
    alert(`${randevu.fullname} isimli hasta kabul edildi.`);
    randevu.durum = "kabul edildi";
    updateReservation(id, randevu);
  } else {
    alert(
      `${randevu.fullname} isimli hastanın randevusu zaten kabul edilmiş veya reddedilmiş.`
    );
  }
}

async function funkReject(id) {
  const randevu = db.find((item) => item.id == id);
  if (randevu.durum == "beklemede") {
    alert(`${randevu.fullname} isimli hasta reddedildi.`);
    randevu.durum = "reddedildi";
    updateReservation(id, randevu);
  } else {
    alert(
      `${randevu.fullname} isimli hastanın randevusu zaten kabul edilmiş veya reddedilmiş.`
    );
  }
}

async function updateReservation(id, updatedData) {
  try {
    const res = await axios.put(
      `https://655dd2b79f1e1093c599f093.mockapi.io/project/${id}`,
      updatedData
    );
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
