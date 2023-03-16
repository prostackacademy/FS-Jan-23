function validateForm() {
    //alert("Test case123")
    let name = document.getElementById('userName').value
    let email = document.getElementById('emailId').value

    if (name == "") {
        //alert("Pls enter User Name")
        document.getElementById('uNameMessage').innerHTML = "Please Enter User Name"
    }
    if (email == "") {
        document.getElementById('uEmailMessage').innerHTML = "Please Enter Proper Email Id"
    }

    return false
}