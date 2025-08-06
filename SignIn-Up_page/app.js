

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

let p = document.querySelector('p');

p.addEventListener("click", function () {
    getPassword();
})

