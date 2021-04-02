const check_login = () =>{
    var mail = document.getElementById("login_mail_input").value;
    var pass = document.getElementById("login_password_input").value;

    if(mail == '' || pass == ''){
        alert("Please fill out this from")
    }else{
        alert("Successful")
        window.location = "/main"
    }
}

