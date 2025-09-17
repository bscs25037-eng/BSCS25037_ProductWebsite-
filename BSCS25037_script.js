window.onload = function() {
  alert("Welcome to our store!");
};
document.getElementById("demo").innerHTML = new Date().getFullYear();
function checkstock(id){
    if(id==='in stock'){
        alert('Product in stock')
    }else{
        alert('Product out of stock')
    }
}
           
function Validateform(){
     let name=document.forms["myForm"]["name"].value;
     let email=document.forms["myForm"]["email"].value;
     let message=document.forms["myForm"]["message"].value;
     if (name===""||email===""||message===" "){
        alert('all fields must be filled out')
        return false;
     }
    if (email.indexOf("@") === -1) {
    alert("Email must contain @ symbol!");
    return false;
  }
    if (email.indexOf(".") === -1) {
    alert("Email must contain '.' symbol!");
    return false;
  }
    if (name.length < 3) {
    alert("Name must be at least 3 characters long!");
    return false;
  }
alert("Form submitted successfully!");
return true;

 }       

function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatLog = document.getElementById("chat-log");

  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);

  let botMsg = document.createElement("p");
  botMsg.textContent = "Bot: " + getBotResponse(input);
  chatLog.appendChild(botMsg);

  document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! What can I do for you?";
  } else if (input.includes("products")) {
    return "Visit our Products Page.";
  } else if (input.includes("location")) {
    return "Visit Home Page or Contact Page.";
  } else if (input.includes("help")) {
    return "Go to Contact Page and fill the form.";
  } else if (input.includes("purchase")) {
    return "Go to Products section. There are multiple products you can choose.";
  } else if (input.includes("in stock") || input.includes("out of stock")) {
    return "Visit Products section and check stock availability.";
  } else {
    return "Sorry, I didn't understand.";
  }
}






