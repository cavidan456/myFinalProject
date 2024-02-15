const form = document.querySelector("form")
const fullname = document.getElementById("fullname");
const email = document.getElementById("email")
const password = document.getElementById("password")

// user login form
async function loginUser(email, password,fullname) {
  try {
    // get user.data
    const response = await axios.get(
      `https://655dd2b79f1e1093c599f093.mockapi.io/users`
    );
    const users = response.data;

    // email kontrol
    const user = users.find((user) => user.email == email && user.password == password && user.fullname == fullname);

    if (user) {
      alert("Giriş başarılı!");
      nameUserLocal()
      window.location.href ="./index.html"
    } else {
      alert("Geçersiz e-posta veya şifre!");
    }
  } catch (error) {
    console.error("Giriş işlemi sırasında bir hata oluştu:", error);
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const userFullname = fullname.value
  const userEmail = email.value
  const userPassword = password.value
  loginUser(userEmail, userPassword, userFullname);
});


function nameUserLocal() {
  if (fullname.value.trim() !== "") {
    localStorage.setItem("username", fullname.value);
    console.log("Kullanıcı adı başarıyla kaydedildi: " + fullname.value);
  } else {
    console.log("Geçersiz kullanıcı adı!");
  }
}