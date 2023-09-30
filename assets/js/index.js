const form = document.querySelector("form");
const invalid = document.getElementById("invalid")
const btnSubmit = document.getElementById("btn-submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email")
    if (emailValidate(email.value)) {
        console.log(true);
        invalid.style.display = "none";
        email.classList.remove("invalid")
        btnSubmit.textContent = "Enviando..."
        localStorage.setItem("content", email.value)
        setTimeout(() => {
            window.location.href = "/pages/success_messages.html"
        }, 3000)
    }
    else {
        invalid.textContent = "Valid email required"
        // email.classList.remove("valid");
        email.classList.add("invalid")
    }
})

const emailValidate = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email)
}

