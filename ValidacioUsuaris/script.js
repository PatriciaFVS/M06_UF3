document.getElementById("email").addEventListener('focusout',function(){

    
    let gmail=document.getElementById('email')
    let email=gmail.value
    let error=document.getElementById('error')
    if (validateEmail(email)){
        gmail.style.backgroundColor = "lightgreen"
        error.textContent=""
        
        
    }else{
        gmail.style.backgroundColor = "pink"
        error.textContent="El mail no està bé"
        error.style.color="red"
        
    }
})

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}
document.getElementById("username").addEventListener('focusout',function(){
    let username=document.getElementById('username');
    let errorUsername=document.getElementById('errorUsername')
    if(username.value==""){
        username.style.backgroundColor = "pink";
        errorUsername.textContent="Has d'omplir el camp"
        errorUsername.style.color="red"
        
    }else{
        username.style.backgroundColor="lightgreen"
        errorUsername.textContent=""
        
        
    }
})


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

    }else if(confirmaPsswd=="") {
        errorConfirmPass.textContent="Has de confirmar la contrassenya"
        this.style.backgroundColor="pink"
    }else{
        errorConfirmPass.textContent=""
        this.style.backgroundColor="lightgreen"
    }


})

document.getElementById("address").addEventListener("focusout",function(){
    let postcode = document.getElementById("address");
    let errorPostcode=document.getElementById("errorPostcode")

    if (postcode.value == "") {
        postcode.style.backgroundColor = "pink"
        errorPostcode.textContent="Omple el codi postal"
        errorPostcode.style.color="red"
        
    } else{
        postcode.style.backgroundColor = "lightgreen"
        errorPostcode.textContent=""
    }

} )

form.addEventListener("submit", function(e){
    e.preventDefault();
    //Validacions
    form.submit();
    });


