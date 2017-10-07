


function add(){
    var a=document.getElementById("firstValue").value;
    var b=document.getElementById("secondValue").value;
    var result=document.getElementById("result");
    result.value=Number(a)+Number(b);
}
// var d=add(5,6); //value of c
// console.log(d);


function multiply(){
    var a=document.getElementById("firstValue").value;
    var b=document.getElementById("secondValue").value;
    var result=document.getElementById("result");
    result.value=Number(a)*Number(b);
}
// var e=multiply(2,5,6);
// console.log(e);
//multiply(5,2,2);

function divide(){
   
    var a=document.getElementById("firstValue").value;
    var b=document.getElementById("secondValue").value;
    var result=document.getElementById("result");
    result.value=Number(a)/Number(b);
}
// var f=division(10,5);
// console.log(f);

function subtract(){
    
    var a=document.getElementById("firstValue").value;
    var b=document.getElementById("secondValue").value;
    var result=document.getElementById("result");
    result.value=Number(a)-Number(b);
}
// var g=subtract(6,2);
// console.log(g);