const form = document.querySelector("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

// user login form
async function loginUser(email, password) {
  try {
    // get user.data
    const response = await axios.get(
      `https://655dd2b79f1e1093c599f093.mockapi.io/users`
    );
    const users = response.data;

    // email kontrol
    const user = users.find((user) => user.email == email && user.password == password);

    if (user) {
      alert("Giriş başarılı!");
      // giris islemi basariliysa isleyecek kodlar
    } else {
      alert("Geçersiz e-posta veya şifre!");
    }
  } catch (error) {
    console.error("Giriş işlemi sırasında bir hata oluştu:", error);
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const userEmail = email.value
  const userPassword = password.value
  loginUser(userEmail, userPassword);
});
