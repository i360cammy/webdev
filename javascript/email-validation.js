function EmailValidation(Email)
{
    
    //Regular expression format taken from https://www.youtube.com/watch?v=nm44wI6zOSc -  Email Validation in JavaScript | JavaScript Form Validation | JavaScript Tutorial | Edureka
    var correctFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    
    if(Email.value.match(correctFormat)){
        alert("Thank you!");
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}