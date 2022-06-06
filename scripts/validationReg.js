let fnameNode=document.getElementById('fname');
let lnameNode=document.getElementById('lname');
let emailNode=document.getElementById('emailid');
let contactNode=document.getElementById('mobile');
let unameNode=document.getElementById('uname');
let passNode=document.getElementById('pass');
let cpassNode=document.getElementById('c_pass');



let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode4=document.getElementById('error4');
let errorNode6=document.getElementById('error6');
let errorNode7=document.getElementById('error7');
let errorNode8=document.getElementById('error8');
let errorNode9=document.getElementById('error9');



const errorBorder="2px solid red";
const successBorder="2px solid green";


function validateForm(){
    let s1=validate1();
    let s3=validate3();
    let s4=validate4();
    let s6=validate6();
    let s7=validate7();
    let s8=validate8();
    let s9=validate9();
    
    return (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9);
}

function validate1(){
    let fname=fnameNode.value; 
    errorNode1.innerHTML="";  
    if(fname===''){
        errorNode1.innerHTML="First name is required";
        fnameNode.style.border=errorBorder;
        return false;
    }
    else{
        fnameNode.style.border=successBorder;
        return true;
    }
};

function validate3(){
    let lname=lnameNode.value; 
    errorNode2.innerHTML="";  
    if(lname===''){
        errorNode2.innerHTML="Last name is required";
        lnameNode.style.border=errorBorder;
        return false;
    }
    else{
        lnameNode.style.border=successBorder;
        return true;
        
    }
};

function validate4(){
    let email=emailNode.value;  
    errorNode4.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
  
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode4.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode4.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;
    }
    else{
        emailNode.style.border=successBorder;
        return true;
    }
};

function validate6(){
    let mobile=contactNode.value;  
    let regExp= new RegExp("^[0-9]{10}$");  
    errorNode6.innerHTML="";  
  
    if(mobile===''){
        errorNode6.innerHTML="Mobile is required";
        contactNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode6.innerHTML="Please enter valid mobile number";
        contactNode.style.border=errorBorder;
        return false;
    }
    else{
        contactNode.style.border=successBorder;
        return true;
    }
};

function validate7(){
    let username=unameNode.value;  
    errorNode7.innerHTML="";  
    if(username===''){
        errorNode7.innerHTML="username is required";
        unameNode.style.border=errorBorder;
        return false;
    }
    else if(username.length<6 || username.length>12){
        errorNode7.innerHTML="Username should be min 6 and max 12 characters long";
        unameNode.style.border=errorBorder;
        return false;
    }
    else{
        unameNode.style.border=successBorder;
        return true;
    }
}
function validate8(){
    let password=passNode.value;  
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    errorNode8.innerHTML="";  
    
    if(password===''){
        errorNode8.innerHTML="Password is required";
        passNode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(password)==false){
        errorNode8.innerHTML="Password should contain atleast one digit, small letter and capital letter.Password should be min 6 and max 15 characters long";
        passNode.style.border=errorBorder;
        return false;
    }
    else{
        passNode.style.border=successBorder;
        return true;
    }
}

function validate9(){
    let password=passNode.value;  
    let c_password=cpassNode.value;  
    errorNode9.innerHTML="";  
    if(c_password===''){
        errorNode9.innerHTML="Confirm Password is required";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else if(c_password!=password){
        errorNode9.innerHTML="Both passwords should match";
        cpassNode.style.border=errorBorder;
        return false;
    }
    else{
        cpassNode.style.border=successBorder;
        return true;
    }
}

