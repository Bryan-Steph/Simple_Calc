var numb1= document.getElementById("num1");
var numb2= document.getElementById("num2");
var result=document.getElementById("result");
document.getElementById("add").addEventListener("click",function(){
    result.value=parseInt(numb1.value)+parseInt(numb2.value);
});
document.getElementById("sub").addEventListener("click",function(){
    result.value=parseInt(numb1.value)-parseInt(numb2.value);
});
document.getElementById("multy").addEventListener("click",function(){
    result.value=parseInt(numb1.value)*parseInt(numb2.value);
});
document.getElementById("div").addEventListener("click",function(){
    result.value=parseInt(numb1.value)/parseInt(numb2.value);
});

