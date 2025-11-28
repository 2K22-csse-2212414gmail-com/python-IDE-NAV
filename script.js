function myFunction() {
    var button=document.getElementById("myButton");
    button.addEventListener("click", displayMessage);
}function displayMessage() {
    console.log("Hello, World!");
}
function buttonSetup() {
    var button=document.createElement("button");
    button.id="myButton";
    button.innerHTML="Click Me";
    document.body.appendChild(button);
}
function butttonInit() {
    var button=document.body;
    button.classList.toggle("active");
}
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
