if(localStorage.getItem('User-email') === null && localStorage.getItem('User-password') === null)
{
    location="index.html"
}

var join = document.getElementById('join');
var box = document.querySelector('.join-form');

join.addEventListener('click',function(){

   box.classList.toggle('join-show');

})

var logout = document.getElementById('logout')

logout.addEventListener('click',function(){
    localStorage.clear('User-email')
    sessionStorage.clear('useremail')
    
    if(confirm('Are you sure'))
    {
        location="index.html"
    }
})

// Send Email
var sub = document.getElementById('submit');

sub.onclick=function(e){

    e.preventDefault();

    let messages = [];

    var email = document.getElementById('email');
    var cmtt = document.getElementById('cmt');

    if(email.value!="")
    {
        if(cmtt.value!="")
        {
            messages.push("Your Comment has been Sent");
            alert("Your Comment has been sent" + "\n\n" + "Your Email is : " + email.value + "\n" + "Your Comment is : " + cmtt.value);
        }
        else
        {
            messages.push("Comment can not be empty");
        }
    }
    else
    {
        messages.push("Email can not be empty");
    }

    var cmt = document.getElementById('errorcmt');

    cmt.innerHTML=messages;

}
// Send Email


// Night Mode
var nightmode = document.getElementById('btn');
var text = document.getElementById('text-detail')
var h3 = document.getElementById('brow');
var left = document.getElementById('left');
var fea = document.getElementById('Feature');
var txtbox =document.getElementById('text-box')
var txtbox1 = document.getElementById('text-box1')

nightmode.addEventListener('click',function(){

    if(nightmode.innerHTML=="Day Mode")
   {    
        nightmode.style.fontWeight='bold'
        nightmode.innerHTML="Night Mode";   
        nightmode.style.color='white'  
   }
   else
   {    
        nightmode.style.fontWeight='bold'
        nightmode.innerHTML="Day Mode"
        nightmode.style.color='white'
   }

   fea.classList.toggle('text-white')
   document.body.classList.toggle('black-bg');
   text.classList.toggle('text-white');
   h3.classList.toggle('text-white');
   
  txtbox.classList.toggle('text-white')
  txtbox1.classList.toggle('text-white')
})
// Night Mode


//purchase Order
var ord = document.getElementById('order')
var pay = document.getElementById('payment')
var ordertxt = document.getElementById('ordertext')

ord.addEventListener('click',function(){

    var select = document.getElementById('selected').value;
    var customer = document.getElementById('clientname').value;
    var quan = document.getElementById('qty').value;

    document.getElementById('cusname').innerHTML=customer;

    document.getElementById('ordertext').innerHTML=select;

    document.getElementById('quantity').innerHTML=quan;

    pay.classList.toggle('payment-show')

    
    let sandwich = 1.25;
    let omelet = 2.75;
    let total = 0 ;

   if(select.value="Tasty-Burgur")
   {
        let Burgur = 2.5;
        total=quan*Burgur;
   }
   else if(select.value="Tasty-Pizza")
   {
        let pizza = 4.5;
        total=quan*pizza;
   }
   else if(select.value="Tasty-Sandwich")
   {
        total=quan*sandwich;
   }

    document.getElementById('Total').innerHTML=total+" $";  
})
//purchase Order

var clr = document.getElementById('clear')
var cus = document.getElementById('cusname')
var txtord = document.getElementById('ordertext')
var q = document.getElementById('quantity')
var totl = document.getElementById('Total')

var clrclientname = document.getElementById('clientname')
var clrselect = document.getElementById('selected')
var clrqty = document.getElementById('qty')

clr.addEventListener('click',function(){

    cus.innerHTML=" ";
    txtord.innerHTML=" ";
    q.innerHTML=" ";
    totl.innerHTML=" ";

    clrclientname.value=" ";
    clrselect.value = "Click to Select";
    clrqty.value=" ";
})

