
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function emailValid(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
function checkRequired(inputArr){
    console.log('Variables:', {
        username: username,
        email: email,
        password: password,
        password2: password2
    });
    for (const input of inputArr){
        if(input.value.trim() === '') {
            showError(input,`${input.id} is required`);
        }else{
            showSuccess(input)
        }
    };
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
});
