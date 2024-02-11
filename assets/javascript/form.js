const chat = document.getElementById("chatBox")
const chatActiveBtn = document.getElementById("chatActiveBtn")

chatActiveBtn.addEventListener("click" , function chatActive() {
    if (chat.className == "chat-container") {
        chat.className = "chat-container chat-active"
    }else{
        chat.className = "chat-container"
    }
})

const chatBtn = document.getElementById("chatBtn")
const chatInput = document.getElementById("chatInput")
const chatList = document.getElementById("chat-list")

chatBtn.addEventListener("click" , function chatAdd() {
    let message = document.createElement("li")
    message.className = "chat-message myMessage"
    message.innerHTML = chatInput.value
    chatList.appendChild(message)
    chatInput.value = ""
})


// form post

const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const illnessSelect = document.getElementById("illness")
const citySelect = document.getElementById("city")
const timeInp = document.getElementById("timeInp")
const messageInp = document.getElementById("messageInp")
const form = document.querySelector("form")


function rezervationPost(event) {
    event.preventDefault()
    
    axios.post(`https://655dd2b79f1e1093c599f093.mockapi.io/project`,{
        fullname:fullname.value,
        email:email.value,
        city:citySelect.value,
        time:timeInp.value,
        illness: illnessSelect.value,
        message:messageInp.value
    }).then(res=>{
        console.log(res);
        // form.reset()
    })
}

form.addEventListener("submit" , rezervationPost)