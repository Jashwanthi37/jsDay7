// Anonymous Functions
//example1
var hello=function(){ console.log("Hello world");}
hello();
//example2
var number=function(){console.log(5);}
number();
//Example3
var addprint=function(){console.log(7+3);}
addprint();
//example4
var add=function(a,b){return a+b;}
console.log(add(6,1));
//example5
var sub=function(a,b){return a-b;}
console.log(sub(10,2));
//example6
var double=function(x){return x+x;}
console.log(double(8));
//example7
var square=function(x){return x*x;}
console.log(square(5))
//example8
var postive=function(x){return x>0;}
console.log(postive(9));
//example9
var absolute=function(x){
    if(x<0){return 0-x;}
    return x}
console.log(absolute(3));
//example10
var max=function(a,b){
    if(a>b){ return a;}
    return b;
}
console.log(max(10,5));

//Arrow Function
//Example1
var hello=() =>console.log("Hello world");
hello();
//Example2
var number=()=>console.log(5);
number();
//Example3
var addprint=()=>console.log(7+3);
addprint();
//Example4
var add=(a,b)=>{return a+b;}
console.log(add(6,1));
//example5
var sub=(a,b)=>{return a-b;}
console.log(sub(10,2));
//example6
var double=(x)=>{return x+x;}
console.log(double(8));
//example7
var square=(x)=>{return x*x;}
console.log(square(5))
//example8
var postive=(x)=>{return x>0;}
console.log(postive(9));
//example9
var absolute=(x)=>{
    if(x<0){return 0-x;}
    return x}
console.log(absolute(3));
//example10
var max=(a,b)=>{
    if(a>b){ return a;}
    return b;
}
console.log(max(10,5));
