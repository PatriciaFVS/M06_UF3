function validarEmail() {
    
    let email=document.getElementById('email');
    let error=document.getElementById('error')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        email.style.backgroundColor = "lightgreen"
        error.textContent=""
        
    }else{
        email.style.backgroundColor = "pink"
        error.textContent="No es correcte"
        error.style.color="red"
    }
}
function validarUsername(){
    let username=document.getElementById('username');
    if(username.value==""){
        username.style.backgroundColor = "pink";
    }else
        username.style.backgroundColor="lightgreen"
}

document.getElementById("password").addEventListener("input", function(){
    let lowerCaseLetters = /[a-z]/;
    let upperCaseLetters = /[A-Z]/;
    let numbers = /[0-9]/;
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let passwordvalor= this.value;
    let errorMessage="";
    
    if(!(passwordvalor.length>8 && passwordvalor.length<15)){
        errorMessage+="La contrasenya ha de ser de 8 a 15 caracters <br>";
    }
    if(!(lowerCaseLetters.test(passwordvalor))){
        errorMessage+="La contrasenya no té minúscules <br>"
    }
    if(!(upperCaseLetters.test(passwordvalor))){
        errorMessage+="La contrasenya no té mayúscules <br>"
    }
    if(!(numbers.test(passwordvalor))){
        errorMessage+="La contrasenya no té números <br>"
    }
    if(!(specialChars.test(passwordvalor))){
        errorMessage+="La contrasenya no té caràcters especials <br>"
    }

    let errorPassword=document.getElementById('errorPass');

    if(errorMessage !==""){
        errorPassword.innerHTML=errorMessage;
        password.style.backgroundColor="pink"
    }else{
        errorPassword.textContent="";
        password.style.backgroundColor="lightgreen"
    }
    
    
})
document.getElementById("confirmPassword").addEventListener("input", function(){
    let originalPsswd= document.getElementById("password").value
    let confirmaPsswd= this.value
    console.log(originalPsswd)
    console.log(confirmaPsswd)

    if(originalPsswd!==confirmaPsswd){
        errorConfirmPass.textContent="Les contrassenyes han de coincidir"
        this.style.backgroundColor="pink"

    }else{
        errorConfirmPass.textContent=""
        this.style.backgroundColor="lightgreen"
    }


})
