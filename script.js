const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&*__";

const allChars = [upperCase, lowerCase, number, symbol].join("");

// Create random password
const createPassword = () => {
  let password = lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));

  while (length > password.length) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  passwordBox.value = password;
};

// Copy generated password
const copyPassword = () => {
  passwordBox.select();
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      console.log("Password copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
};
