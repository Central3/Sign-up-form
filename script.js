const password = document.querySelector("#pwd");
const confirmPassword = document.querySelector("#confirm-pwd");
const form = document.querySelector("form");
const error = document.querySelector(".error-text");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        error.textContent = "* Passwords do not match.";
        password.classList.add("error");
        confirmPassword.classList.add("error");
    } else {
        console.log("success");
    }
});
