let fnameNode=document.getElementById('fname');
let lnameNode=document.getElementById('lname');
let contactNode=document.getElementById('mobile');
let address=document.getElementById('adr');
let pinCode=document.getElementById('pin');


let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error3');
let errorNode6=document.getElementById('error6');
let errorNode7=document.getElementById('error7');
let errorNode8=document.getElementById('error8');


const errorBorder="2px solid red";
const successBorder="2px solid green";

function validateForm(){
    let s1=validate1();
    let s3=validate3();
    let s6=validate6();
    let s7=validate7();
    let s8=validate8();

    console.log(s1 && s3 && s6 && s7 && s8);

    return(s1 && s3 && s6 && s7 && s8);


    

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
    let addr=address.value; 
    errorNode7.innerHTML="";  
    if(addr===''){
        errorNode7.innerHTML="Address is required";
        address.style.border=errorBorder;
        return false;
    }
    else{
        addr.style.border=successBorder;
        return true;
        
    }
};

function validate8(){
    let pin=pinCode.value;  
    let regExp= new RegExp("^[0-9]{6}$");  
    errorNode8.innerHTML="";  
  
    if(pin===''){
        errorNode8.innerHTML="Pin-Code  is required";
        pinCode.style.border=errorBorder;
        return false;
    }
    else if(regExp.test(pin)==false){
        errorNode8.innerHTML="Please enter valid  Pin-Code";
        pinCode.style.border=errorBorder;
        return false;
    }
    else{
        pinCode.style.border=successBorder;
        return true;
    }
};

