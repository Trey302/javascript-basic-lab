// Exercise-1
const name = prompt("Hi, what is your name?");
const message = prompt( "Hello, " + name + " What do you do? ");
let next = prompt("Do you enjoy being a " + message + "?");
if(next=="Yes"){
    alert(name + " is a " + message + " and enjoys it. ")
}
else if(next=="yes"){
    alert(name + " is a " + message + " and enjoys it. ")
}
else if(next == "No"){
    alert(name + " is a " + message + " and doesn't enjoy it sadly. ")
}

