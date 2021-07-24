const createBtn = document.querySelector(".createBtn");
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");

const signUp = () => {
  alert("A new account was successfully created :)");
  //go back to the home page
  location.pathname = "/";
};

createBtn.addEventListener("click", (e) => {
  console.log("hi")
  e.preventDefault();
  //validation check
  (emailInput.value === "" || passwordInput.value === "") ?
    alert("please input both email and password") : signUp();
});