function refund()
{
    document.getElementById("ref").style.display="block";

}

function submit()
{
    let confirmAction = confirm("Are You Sure Want to CANCEL TICKET.");

    if(confirmAction)
    location.replace("processing.html")
    else
    location.replace("cancellation.html")
    
}

function back()
{
    alert("Please Dont press Back While Cancellation is in Process")
}

function validate()
{
    
    var username = document.getElementById("uname");
    var email = document.getElementById("mail");

    if(username.value.trim() =="" || email.value.trim() =="")
    {
        alert("No Blank Values Allowed");
        return false;
    }
    if(username.value !="E69690MLL8B")
    {
        alert("Enter valid TICKET NUMBER")
        return false;
    }
    else
    {
        true;
    }

}

function showticket()

{
    var mobile=document.getElementById("mnum");
    var email=document.getElementById("gmail");

    if(mobile.value.trim() =="" || email.value.trim()=="")
    {
        alert("No blank Values Allowed")
        return false;
    }
    if(mobile.value.length < 10)
    {
        alert("Mobile Number should'nt be less than 10 digits")
        return false;
    }
    else{
        true;
    }
}

function reaso()
{
    var s1=document.getElementById("reason");
    var s2=document.getElementById("ticket");
    if(s1.value =="select your reason" && s2.value =="")  
    {
        alert("Please Select the reason for cancellation")
        return false;
         
    }
    else
    {
        true; 
    }
    
    alert("Are You Sure Want to CANCEL TICKET.")
}



