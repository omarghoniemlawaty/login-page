document.addEventListener("DOMContentLoaded", () => {
    const registerPage = document.getElementById("register-page");
    const loginPage = document.getElementById("login-page");
    const homePage = document.getElementById("home-page");
  
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
  
    const goToLoginLink = document.getElementById("go-to-login");
    const goToRegisterLink = document.getElementById("go-to-register");
  
    const logoutButton = document.getElementById("logout-button");
    const userNameDisplay = document.getElementById("user-name");
  
    const showPage = (page) => {
      document.querySelectorAll(".form-container, #home-page").forEach((p) => {
        p.classList.add("hidden");
      });
      page.classList.remove("hidden");
    };
  
    const isEmailRegistered = (email) => !!localStorage.getItem(email);
  
    const saveUser = (email, password) => {
      localStorage.setItem(email, JSON.stringify({ password }));
    };
  
    const getUser = (email) => JSON.parse(localStorage.getItem(email));
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
  
      if (isEmailRegistered(email)) {
        alert("This email is already registered.");
        return;
      }
  
      saveUser(email, password);
      alert("Registration successful!");
      showPage(homePage);
      userNameDisplay.textContent = email;
    });
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      const user = getUser(email);
      if (!user || user.password !== password) {
        alert("Invalid email or password.");
        return;
      }
  
      showPage(homePage);
      userNameDisplay.textContent = email;
    });
  
    logoutButton.addEventListener("click", () => {
      alert("Logged out successfully.");
      showPage(loginPage);
    });
  
    goToLoginLink.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(loginPage);
    });
  
    goToRegisterLink.addEventListener
})