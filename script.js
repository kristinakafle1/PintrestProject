function showMainPage() {
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("mainPage").classList.remove("hidden");
}

function showSignupForm() {
  document.getElementById("welcomeContent").classList.add("hidden");
  document.getElementById("signupFormContainer").classList.remove("hidden");
}

function backToWelcome() {
  document.getElementById("signupFormContainer").classList.add("hidden");
  document.getElementById("welcomeContent").classList.remove("hidden");
}

function submitSignup(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // You can add real validation here
  console.log("Signed up with:", email, password);

  showMainPage();
}

function logout() {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("welcomePage").style.display = "flex";
  document.getElementById("signupFormContainer").classList.add("hidden");
  document.getElementById("welcomeContent").classList.remove("hidden");
  document.getElementById("signupForm").reset();
}
