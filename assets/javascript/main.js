// index.html javascript code 


document.addEventListener('DOMContentLoaded', function() {
    var sayacElementi = document.getElementById('sayac');
    var sayacDegeri = 1;

    function artirSayac() {
        sayacElementi.textContent = sayacDegeri;
        sayacDegeri++;

        if (sayacDegeri > 25) {
         sayacDegeri = 25
        }
    }

    setInterval(artirSayac, 100);
});


document.addEventListener('DOMContentLoaded', function() {
    var sayacElementi = document.getElementById("nomrem");
    var sayacDegeri = 6000;

    function artirSayac() {
        sayacElementi.textContent = sayacDegeri;
        sayacDegeri += 29

        if (sayacDegeri > 9999) {
         sayacDegeri = 9999
        }
    }

    setInterval(artirSayac, 30);
});

document.addEventListener('DOMContentLoaded', function() {
    var sayacElementi = document.getElementById("nomrem1");
    var sayacDegeri = 6000;

    function artirSayac() {
        sayacElementi.textContent = sayacDegeri;
        sayacDegeri += 29

        if (sayacDegeri > 9999) {
         sayacDegeri = 9999
        }
    }

    setInterval(artirSayac, 30);
});


document.addEventListener('DOMContentLoaded', function() {
    var sayacElementi = document.getElementById("nomrem2");
    var sayacDegeri = 6000;

    function artirSayac() {
        sayacElementi.textContent = sayacDegeri;
        sayacDegeri += 29

        if (sayacDegeri > 9999) {
         sayacDegeri = 9999
        }
    }

    setInterval(artirSayac, 30);
});


// rezervation section javascript code

const doctors = document.getElementById("doctors");


let limit = 8

let page = 1


async function getDoctors() {
    const res= await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/project?page=${page}&limit=${limit}`)
    const data = res.data
    db = data
    db.forEach(item => {
        let box = document.createElement("div")
        box.className = "col-3 mb-5"
        box.innerHTML=`
        <div class="card">
  <img class="card-img-top" src="${item.avatar}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.lastname} ${item.firstname}</h5>
    <h6 class="card-title">${item.positionJop}</h6>
    <p class="card-text">${item.description}</p>
    <button class="btn btn-primary" onclick="addCart(${item.id})">Rezerv</button>
  </div>
</div>`
        doctors.appendChild(box)
    });
}

getDoctors()

function addCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"))||[]
    doctorRezerv = cart.find((item)=>item.id == id)
    if (doctorRezerv) {
        alert("rezervsyon istegi zeten gonderildi")
    }else{
        cart.push(db.find((item) => item.id == id))
        localStorage.setItem("cart" , JSON.stringify(cart))
    }
}
