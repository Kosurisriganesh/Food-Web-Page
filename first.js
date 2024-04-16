function Ganesh(){
    let Fname = document.getElementById('Fname').value;
    let Lname = document.getElementById('Lname').value;
    let Gmail = document.getElementById('Gmailid').value;
    let Password = document.getElementById('Password').value;
    let ConformPassword = document.getElementById('ConformPassword').value;
    if(Fname ==""){
        alert("enter first name");
    }
    else if(Lname==""){
        alert("enter the last name");
    }
    else if(Gmail==""){
        alert("enter the Gmail");
    }
    else if(Password==""){
        alert("enter the Password");

    }
    else if(Password == ConformPassword){
        alert("Password should be match");
    }
    else{
        alert("form submit successfully");
    }
    return;

}
document.getElementById("Submit").addEventListener("click", function() {
     Ganesh();
    
  });

  