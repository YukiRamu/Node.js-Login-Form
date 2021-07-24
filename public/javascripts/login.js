const loginBtn = document.querySelector(".loginBtn");
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");

const login = () => {
  alert("login successfull :)");
  //go back to the home page
  location.pathname = "/";
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //validation check
  (emailInput.value === "" || passwordInput.value === "") ?
    alert("please input your credential") : login();
});