const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const date = document.getElementById("youDate");
const email = document.getElementById("email");
const password = document.getElementById("password");



// users singup function
async function registerUser() {
  
  try {
    // get user data
    const response = await axios.get(
      `https://655dd2b79f1e1093c599f093.mockapi.io/users`
    );
    const users = response.data;

    // Email control
    const emailExists = users.some((user) => user.email === email.value);

    if (emailExists) {
      alert("Bu e-posta adresi zaten kullanımda!");
      return false; 
    } else {
      await axios.post(`https://655dd2b79f1e1093c599f093.mockapi.io/users`, {
        fullname: fullname.value,
        date: date.value,
        email: email.value,
        password: password.value,
      });
      console.log("Kullanıcı kaydedildi: " + fullname.value);
      form.reset()
      return true; 
    }
  } catch (error) {
    console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
    return false;
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault()
  registerUser()
});
