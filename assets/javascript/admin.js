const rezervasyon = document.getElementById("rezervasyon")

function requestGet() {
    let cart = JSON.parse(localStorage.getItem("cart"))||[]
    db = cart
    db.forEach(item => {
        let box = document.createElement("div")
        box.className = "col-12"
        box.innerHTML = `
        <div class="request-text">
  <h2></h2>
  <p>
    Bir Kullanici x hekimini icin y tarihine rezervasyon yapdirmak istiyor.
    hastanin rezervasyon istegi kabul edilsin mi ?
  </p>
  <button class="btn btn-success">kabul et</button>
  <button class="btn btn-danger">redd et</button>
</div>`
    });
}


