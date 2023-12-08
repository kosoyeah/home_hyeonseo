function adder(a,b){
    var sum;
    sum = a+b;
    return sum;
}
var message = "in global";


var a = function (){
    var message = "inside function a";
    document.write("<br>function a: message = " + message);
    b();
}
function b(){
    document.write("<br>function b: message = " + message);
}