const form = document.querySelector(".signup-form");
const email = document.querySelector(".email-address");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailEnterd = email.value;
  console.log(emailEnterd);

  if (!isValidEmail(emailEnterd)) {
    console.log("we are here");
    form.classList.add("error");

  } else {
    form.classList.remove("error");
    document.body.innerHTML = "Thanks!";
  }
});

function isValidEmail(emailEnterd) {
  return /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+\@([A-Za-z0-9_-]+\.)+[A-Za-z]{2,4}$/.test(
    emailEnterd
  );
}
