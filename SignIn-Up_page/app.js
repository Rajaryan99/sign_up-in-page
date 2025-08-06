let p = document.querySelector('p');
let signup = document.querySelector('.btn1');
let signin = document.querySelector('.btn2');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let username = document.querySelector('.name');

function getPassword() {
    const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const number = '1234567890';
    const symbol = "!@#$%^&*()_-?></.,:\|><";

    const allchar = uppercase + lowercase + number + symbol;
    let passwordelem = document.querySelector("p");
    let password = "";

    for (let i = 0; i <= 10; i++) {
        let randomnum = Math.floor(Math.random() * allchar.length);
        password += allchar[randomnum];

    }

    passwordelem.innerText = password;



}

p.addEventListener("click", function () {
    getPassword();
});

signin.addEventListener('click', () => {
    username.style.height = '0';
    title.innerHTML = 'Sign In';
    signin.classList.remove('disable');
    signup.classList.add('disable');
    underline.style.transform = 'translate(35px)'
});

signup.addEventListener('click', () => {
    username.style.height = '60px';
    title.innerHTML = 'Sign Up';
    signin.classList.add('disable');
    signup.classList.remove('disable');
    underline.style.transform = 'translate(0)'
});

