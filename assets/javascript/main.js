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

function userLogin() {
    const fullname = localStorage.getItem("username");
    if (fullname) {
        const userControl = document.getElementById("userControl");
        const name = document.createElement("div");
        name.className = "user-account"
        name.innerHTML = `
        <p class="headers-txt">${fullname}</p>
        <button id="login-btn" onclick="deleteUserFromLocal()">Log Out</button>`
        name.style.color = "#000";
        userControl.innerHTML =``
        userControl.appendChild(name);
    } else {
        console.log("Kullanıcı adı bulunamadı.");
    }
}

userLogin()

function deleteUserFromLocal() {
    localStorage.removeItem("username");
    userControl.innerHTML = `
    <a href="./login.html">
                <button id="login-btn">Login</button>
              </a>
              <a href="./singup.html">
                <button id="singup-btn">Sing Up</button>
              </a>`
}
