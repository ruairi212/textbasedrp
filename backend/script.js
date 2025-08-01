
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
function showSuccess(){
    
}
function showError(){

}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === '') {
            showError(input,`${input.id} is required`);
        }else{
            showSuccess(input)
        }
    });
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
});

