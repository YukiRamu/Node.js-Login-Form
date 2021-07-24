const loginBtn = document.querySelector(".loginBtn");
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");

const login = () => {
  alert("Login successfull :)");
  //go back to the home page
  location.pathname = "/";
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //validation check
  (emailInput.value === "" || passwordInput.value === "") ?
    alert("Please input your credential") : login();
});