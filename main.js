const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const Password = document.querySelector("#password");
const ConfirmPassword = document.querySelector("#ConfirmPassword");

const form = document.querySelector("#form");
// function so mujinaayo errorka
const ShowError =(input,massage) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error'

    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const ErrorIcon = parentElement.querySelectorAll("i")[1];

    ErrorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = massage;
};
// Function soo muujinaayo Check 
const ShowSuccess =(input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success'

    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const ErrorIcon = parentElement.querySelectorAll("i")[1];

    ErrorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
};

// Function checking empty
const checkEmpty = (elements) =>{

    elements.forEach( (Element) => {
        if(Element.value === ''){
           ShowError(Element, 'input required')
        }else{
            ShowSuccess(Element);
        }
    });
};
// Declare 

const checkEmail = (Email) => {
    const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(Email.value)){
        ShowSuccess(Email);
    }else{
        ShowError(Email,"invalid Email");
    }
};

// Check password

const checkPasswordlength = (input,min,max) =>{
    if(input.value.length < min){
        ShowError(input,"password at least 8 characters")
    }else if(input.value.length > max){
        ShowError(input,`Password maximum characters is ${max}`)
    }else{
        ShowSuccess(input);
    }

}
// confirm password
const checkConfirmPassword = (Password,ConfirmPassword) =>{
    if(Password.value !== ConfirmPassword.value){
        ShowError(ConfirmPassword,"password is not match");
    }
}
form.addEventListener("submit" , (event) => {
    event.preventDefault();
    
    // function check empty

    checkEmpty([username,Email,Password,ConfirmPassword]);
    checkEmail(Email);
    checkPasswordlength(Password,8,10);
    checkConfirmPassword(password,ConfirmPassword);
   
});