const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&*__";

const allChars = upperCase + lowerCase + number + symbol;

// Create random password
const createPassword = () => {
    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

// Copy generated password
const copyPassword = () => {
    passwordBox.select();
    document.execCommand('copy'); 
}