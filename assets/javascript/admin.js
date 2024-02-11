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
    `;
    rezervation.appendChild(box)
  });
}

rezervationGet()