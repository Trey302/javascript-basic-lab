// Exercise-2
const name = prompt("Hello, what is your name?");
const message = prompt( "Hi, " + name + " pick a color Green, Red, or Yellow. ");
if (message == "Green"){
    alert("You chose Green.")
    alert(name + " chose the color Green.")
}
else if (message== "Red"){
    alert("You chose Red.")
    alert(name + " chose the color Red.")
}
else{
    alert("You chose Yellow.")
    alert(name + " chose the color Yellow.")
}