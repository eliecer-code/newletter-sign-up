const successbtn = document.getElementById("dimiss");
const emailConfirmation = document.getElementById("message-email");

const getLocalStorage = () => {
    const content = localStorage.getItem("content");
    if (content) {
        emailConfirmation.textContent = content;
    }
}
successbtn.addEventListener("click", (e) => {
    window.location.href = "/index.html"
})

getLocalStorage()
