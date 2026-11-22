function login(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    if (user=="Baka" && pass=="223"){
        document.getElementById("result").innerHTML=
        "Login Successful";
        window.location.href="lover.html"
     }else{
        document.getElementById("result").innerHTML=
        "Wrong Username or Password";
     }
    
}