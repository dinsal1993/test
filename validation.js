function validatePassword(isSignUp)
{
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var regexPassword = /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[@^&*()\-_=+\\|\[\]\{\};:\/.>!#\$%&\?].*).{6,}/;

    var passDig = /(?=.*\d.*)/;
    var passLower = /(?=.*[a-z].*)/;
    var passUpper = /(?=.*[A-Z].*)/;
    var passSpecialChar = /(?=.*[@^&*()\-_=+\\|\[\]\{\};:\/.>!#\$%&\?].*)/;
    var passLength = /.{6,}/;

    var error = [];

    if(!regexEmail.test(email))
        error.push("Invalid Email");
    if(!passDig.test(password))
        error.push("Must contain a Digit");
    if(!passLower.test(password))
        error.push("Must contain a Lower case character");
    if(!passUpper.test(password))
        error.push("Must contain a Upper case character");
    if(!passSpecialChar.test(password))
        error.push('Must contain special character: ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > \<');
    if(!passLength.test(password))
        error.push("Must be at least 6 characters");
    if(isSignUp) {
        var passwordConfirm = document.getElementById("passwordConfirm").value;
        if (!(password === passwordConfirm))
            error.push("Password and Confirm Password should match");
    }
    
    if(error.length === 0)
        window.alert("email: " + email + ", password: " + password);
    else {
        var errorMsg = "";
        for(var i = 0; i < error.length; i++)
            errorMsg += error[i] + "\n";
        window.alert(errorMsg);
    }
    for(var i = 0; i < error.length; i++)
        error.pop();
}

function validateContactUs() {
    let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let select = document.getElementById("option-select").value;
    let subject = document.getElementById("subject").value;

    let error = [];
    if(!regexEmail.test(email))
        error.push("Invalid Email");
    if(name === "")
        error.push("Empty name field");
    if(select === "")
        error.push("Empty select field");
    if(subject === "")
        error.push("Empty subject field");

    if(error.length === 0)
        window.alert("name: " + name + ", email: " + email + ", select: " + select + "\n" + subject);
    else {
        let errorMsg = "";
        for(let i = 0; i < error.length; i++)
            errorMsg += error[i] + "\n";
        window.alert(errorMsg);
    }
    for(let i = 0; i < error.length; i++)
        error.pop();

}
