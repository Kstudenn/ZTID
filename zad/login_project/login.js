// referencje do elementów występujących w głownym pliku HTML
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// dodaje nasłuchiwanie eventu kliknięcia, po czym wykonuje się poniższy kod funcji
loginButton.addEventListener("click", (e) => {
    // zapobiega domyślnemu zachowaniu przeglądarki po kliknięciu
    e.preventDefault();
    // przypisanie wartości do nowych zmiennych
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // sprawdza czy wartości są równe poniższym
    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        // komunikat blędu logowania
        loginErrorMsg.style.opacity = 1;
    }
})
