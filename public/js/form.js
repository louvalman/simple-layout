const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

// floating labels (valid fix)

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
        if (event.target.value) {
            input.classList.add("is-valid");
        } else {
            input.classList.remove("is-valid");
        }
    });
});

inputs.forEach((textarea) => {
    textarea.addEventListener("blur", (event) => {
        if (event.target.value) {
            textarea.classList.add("is-valid");
        } else {
            textarea.classList.remove("is-valid");
        }
    });
});

submitBtn.addEventListener('click', () => {
    if (name.value.length < 3) {
        showAlert('Your name must be at least three letters long');
    } else if (!email.value.length) {
        showAlert('Enter your e-mail address');
    } else if (!number.value.length) {
        showAlert('Please enter your phone number');
    } else if (!Number(number.value) || number.value.length < 8) {
        showAlert('Invalid phone number, please enter valid one (at least eight numbers)');
    } else if (password.value.length < 8) {
        showAlert('Your password should be at least eight letters long');
    } else if (!tac.checked) {
        showAlert('You must agree to our terms and conditions');
    } else {
        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    }
})

// send data function
const sendData = (path, data) => {
    fetch(path, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then(response => {
            console.log(response);
            processData(response);
        })
}

const processData = (data) => {
    loader.style.display = null;
    if (data.alert) {
        showAlert(data.alert);
    }
}

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}