function add(objInput, objList){
    var strGroup = objList.options[objList.selectedIndex].value;
    if(objInput.value == ""){
        objInput.value = strGroup;
    } else {
        objInput.value += ('; ' + strGroup);
    }
}

function validate(form){
    var returnValue = true;
    var sendTo = form.txtTo.value;
    var cc = form.txtCC.value;
    var subject = form.txtSubject.value;
    var message = form.txtMessage.value;
    var rxEmail = /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i;

    // Cleaning previous errors
    document.getElementById("txtTo").nextSibling.innerHTML = "";

    if(sendTo == ""){
        returnValue = false;
        document.getElementById("txtTo").nextSibling.innerHTML =
            "There are no email addresses in the 'To' field";
        document.getElementById("txtTo").focus();
    } else {
        var arrTo = sendTo.split("; ");
        for (var i=0; i < arrTo.length; i++){
            if(!rxEmail.test(arrTo[i])){
                returnValue = false;
                document.getElementById("txtTo").nextSibling.innerHTML =
                    "The e-mail address(es) provided does no appear to be valid";
                document.getElementById("txtTo").focus();
            }
        }
    }

    // Cleaning previous errors
    document.getElementById("txtCC").nextSibling.innerHTML = "";

    if(cc != ""){
        var arrCC = cc.split("; ");
        //document.getElementById("txtCC").nextSibling.innerHTML = "";
        for(var i=0; i < arrCC.length; i++){
            if(!rxEmail.test(arrCC[i])){
                returnValue = false;
                document.getElementById("txtCC").nextSibling.innerHTML =
                    "The e-mail address(es) provided does not appear to be valid";
                document.getElementById("txtCC").focus();
            }
        }
    }

    // Cleaning previous errors
    document.getElementById("txtSubject").nextSibling.innerHTML = "";

    if(subject == ""){
        returnValue = false;
        document.getElementById("txtSubject").nextSibling.innerHTML =
            "There is no subject for this e-mail";
        document.getElementById("txtSubject").focus();
    }

    // Cleaning previous errors
    document.getElementById("txtMessage").nextSibling.innerHTML = "";
    
    if(message == ""){
        returnValue = false;

        document.getElementById("txtMessage").nextSibling.innerHTML = 
            "There is no message for this e-mail";
        document.getElementById("txtMessage").focus();
    }
    return returnValue;
}

