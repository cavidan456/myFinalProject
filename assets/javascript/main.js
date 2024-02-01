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
