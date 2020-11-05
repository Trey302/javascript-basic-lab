// Exercise-3
const name = prompt("Hello, what is your name?");
const message = prompt( "Hi, " + name + " choose any number from 1-20. ");
if (message < 5) {
    console.log("Tiny")
}
else if (message < 10) {
    console.log("Small")
}
else if (message < 15) {
    console.log("Medium")
}
else if (message < 20) {
    console.log("Large")
}
else if (message = 20) {
    console.log("Huge")
}