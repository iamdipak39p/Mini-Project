let emailNode=document.getElementById('emailid');
let errorNode1=document.getElementById('error1');
let passNode=document.getElementById('pass');
let errorNode2=document.getElementById('error2');

const errorBorder="2px solid red";
const successBorder="2px solid green";

function validateLogin(){
    let s1=validate1();
    let s2=validate2();
    console.log(s1 && s2);
    return(s1 && s2);
};





function validate1(){
    let email=emailNode.value;  
    errorNode1.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
  
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode1.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!email.includes('@')){
        errorNode1.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode1.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
};

function validate2(){
    let password=passNode.value;  
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    errorNode2.innerHTML="";  
    
    if(password===''){
        errorNode2.innerHTML="Password is required";
        passNode.style.border=errorBorder;
        return false;
    }
   
    else{
        passNode.style.border=successBorder;
        return true;
    }
}

