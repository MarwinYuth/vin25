if(localStorage.getItem('User-email') != null && sessionStorage.getItem('useremail') != null)
{
    if(localStorage.getItem('User-email') == sessionStorage.getItem('useremail') && localStorage.getItem('User-password') == sessionStorage.getItem('userpassword'))
    {
        location="shop.html"
    }
}

var signup = document.getElementById('signup')
var emailup = document.getElementById('email-in')
var passup = document.getElementById('password-in')

signup.addEventListener('click',function(){

    if(emailup.value!="" && passup.value!="")
    {
        localStorage.setItem('User-email',emailup.value)
        localStorage.setItem('User-password',passup.value)

        document.getElementById('message1').innerHTML="Successfully Signup  <br><br>"
    }
    else
    {
        document.getElementById('message1').innerHTML="Input User & Password to Signup  <br><br>"
    }
   
})

var getemail = localStorage.getItem('User-email')
var getpass = localStorage.getItem('User-password')



var signin = document.getElementById('signin')
var emaillog = document.getElementById('email-log')
var passlog = document.getElementById('password-log')

signin.addEventListener('click',function(ex){

    ex.preventDefault()

    if(emaillog.value==getemail && passlog.value==getpass)
    {
        sessionStorage.setItem('useremail',emaillog.value)
        sessionStorage.setItem('userpassword',passlog.value)
        location="shop.html";
    }
    else if(emaillog.value!=getemail && passlog.value!=getpass)
    {
        document.getElementById('message2').innerHTML="Login Fail or Sign up <br><br>"
    }

})





