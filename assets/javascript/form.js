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
    let message  =document.createElement("li")
    message.className = "chat-message myMessage"
    message.innerHTML = chatInput.value
    chatList.appendChild(message)
    chatInput.value = ""
})