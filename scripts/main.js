var form=document.querySelector("form")
form.addEventListener("submit",add)

function add(){
  event.preventDefault();
  
  var name=form.name.value;
  var email=form.email.value;
  var address=form.address.value;
  var amount=form.amount.value;

  var obj={
    name:name,
    email:email,
    address:address,
    Wallet:amount
  }


localStorage.setItem("user",JSON.stringify(obj))
window.location.reload();



}


