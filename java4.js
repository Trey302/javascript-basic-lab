// Exercise-4
const name = prompt("Hello, what is your name?");
const rate = prompt("Hi, " + name + " what is your rate of pay?");
const hours = prompt("Thank you " + name + ", now how much hours do you work a week?");
const money = rate * hours * 1.5
const total = rate * hours
if (hours > 40){
    alert(name + " worked a total of " + hours + " hours receiving a pay of " + "$" + money)
}
else{
    alert(name + " worked a total of " + hours + " hours receiving a pay of " + "$" + total)
}