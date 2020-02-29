// Slider Character Length
var slider = document.getElementById("myCode");
var output = document.getElementById("character");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
//Generate Password
  function generate(){

//Set Password Length
    let length = document.getElementById("myCode").value;
    

//Password Values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*";

    let password = "";

//Loop..Coose Password Characters
    for(var i = 0; i <= length; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

 //Password ViewerPoint
    document.getElementById("viewerPoint").value = password;

}

//Set Length Based on Slider Position
    document.getElementById("myRange").oninput = function(){

    if(document.getElementById("myRange").value > 0){
        document.getElementById("range").innerHTML = "Length: " + document.getElementById("myCode").value;
}
    else{
        document.getElementById("range").innerHTML = "Length: 1";
}}

//Copy Password to Clipboard
    function copyPassword(){

    document.getElementById("viewerPoint").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}