const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal= password.value.trim();
    const cpasswordVal= cpassword.value.trim();


    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else{
    setSucess(username)
    }

    if(emailVal===''){
        setError(email,'Email is required')
    }
    // else if(!validateEmail(emailVal)){
    //     setError(email,'Please enter a valid email')
    // }
    else{
        setSucess(email)
    }
    if(passwordVal===''){
        setError(password,'Password is required')
    }
    else if (passwordVal.length<8){
        setError('Password must be atleast 8 characters')
    }
    else{
        setSucess(password)
    }
    if(cpasswordVal===''){
        setError(cpassword,'Confirm password is required')
    }
    else if(cpassVal!==passwordVal){
        setError(cpassword,'Password doesnot match')
    }
    else{
        setSucess(cpass)
    }
}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
    
}

function setSucess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
} 


const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    ) ;

};





