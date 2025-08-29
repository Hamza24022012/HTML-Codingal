function validate(e){
e.preventDefault();

const email=document.getElementById("email").value
    const pass = document.getElementById("password").value
    const age = document.getElementById("age").value
    const msgbox= document.getElementById("message").value
    var message=""
    if (email ===""){
        message ="Enter email";
        msgbox.style.color="red";
    }
    else if(pass ===""){
        message = "Enter password";
        msgbox.style.color = "red";
    }
    else if (age === "") {
        message = "Enter age";
        msgbox.style.color = "red";
    }
    else{
message="Login successful"
        msgbox.style.color = "green";
    }
    msgbox.innerText=message
}