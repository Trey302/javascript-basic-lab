// Exercise-3
const name = prompt("Hello, what is your name?");
const message = prompt( "Hi, " + name + " choose any number from 1-20. ");
if (message < 5) {
    alert("Tiny")
}
else if (message < 10) {
    alert("Small")
}
else if (message < 15) {
    alert("Medium")
}
else if (message < 20) {
    alert("Large")
}
else if (message = 20) {
    alert("Huge")
}