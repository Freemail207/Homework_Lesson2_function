/**
 * Created by user on 02.11.2016.
 */
/*
1. Create a function that will take any number of arguments and return their sum.
 2. Make this function be able to take array as argument.*/
function sum(variable){
    var a=0;
    if (Array.isArray(variable)){
        for(var i=0; i<variable.length; i++){
            a+=variable[i];

        }
        return a;
    }
    for(var i=0; i<arguments.length; i++){
        a+=arguments[i];
    }
    return a;
}
/*
 1. Declare a private variable using IIFE.
 */
var module = (function () {
    var a=10;//private
    return {
        key:100,//public
        getA:function(){//public
            return a;
        }
    }
}());
/*
* 1. Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
*/
function celsiusToFahrenheit(degree){
    var fahrenheit;
    fahrenheit=degree*1.8+32;
    console.log(degree+'°C is '+fahrenheit+'°F');
}
/*
 2. Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C."*/
function fahrenheitToCelsius(degree){
    var celsius;
    celsius=(degree-32)/1.8;
    console.log(degree+'°F is '+(Math.round(celsius * 100) / 100 )+'°C');
}
/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
* */
function findLongest(str){
    var index;
    var max=0;
    var parseStr=str.match(/\S[A-Za-z]*/g);
    for(var i=0; i<parseStr.length; i++){
        if(parseStr[i].length>max){
            max=parseStr[i].length;
            index=i;
        }
    }
    return parseStr[index];

}
/*
* 1. Write a function that can print entity details based on next model:
 {
 name: String,
 type: String,
 age: Number
 }
 Expected output: "%NAME%(%TYPE%) - %AGE%."*/
var obj1={
    name:'Andrew',
    type:'Student',
    age: 22
}
function writeInform(obj){
    console.log(obj.name+'('+obj.type+')'+'-'+obj.age);
}
/*
* 2. Rewrite that function to use this instead of argument (use apply, call and bind to print the details of different entities).*/
function writeInform(name,type,age){
    console.log(this[name]+'('+this[type]+')'+'-'+this[age]);
}
var obj2={
    myName:'Andrew',
    myType:'Student',
    myAge:22
}
writeInform.call(obj2,'myName','myType','myAge');
writeInform.apply(obj2,['myName','myType','myAge']);
var newWriteInfo = writeInform.bind(obj2,'myName','myType','myAge');
newWriteInfo();