function findChecked(rad){
    var color = null;
    for(var i=0; i < rad.length; i++){
        if(rad[i].checked){
            color = rad[i].value;
            break;
        }
    }
    return color;
}

function validate(form){
    var name = form.txtName.value;
    var email = form.txtEmail.value;
    var color = findChecked(form.radAnswer);
    var breaker = form.txtTieBreaker.value;
    var valid = true;
    var errorMsg = "";
    var rxEmail = /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i;

    if(breaker == "" || breaker.split(/s+/g).length > 20){
        valid = false;
        document.getElementsByName('txtTieBreaker')[0].focus();
        errorMsg = "Tie breaker can not be empty, neither longer than 20 words\n" + errorMsg;
    }

    if(color == null){
        valid = false;
        errorMsg = "No color checked\n" + errorMsg;
    }

    if(email == "" || !rxEmail.test(email)){
        valid = false;
        document.getElementsByName('txtName')[0].focus();
        errorMsg = "Email provided isn't valid\n" + errorMsg;
    }

    if(name == ""){
        valid = false;
        document.getElementsByName('txtName')[0].focus();
        errorMsg = "Name can't be empty\n" + errorMsg;
    }

    if(!valid){
        alert(errorMsg);
    }
    return valid;
}


