function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition of given value is"+c
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="Subraction of given value is"+c
}
function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button3").innerHTML="Multipaction of given value is"+c
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button4").innerHTML="Division of given value is"+c
}    
function mol(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a%b;
    document.getElementById("button5").innerHTML="Modulus of given value is"+c
}    
function sqv_1(){
    let a=parseInt(document.getElementById("n1").value);
    //let b=parseInt(document.getElementById("n2").value);
    let c=a**a;
    document.getElementById("button6").innerHTML="Square values of given value is"+c
}    
function sqv_2(){
    //let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=b**b;
    document.getElementById("button7").innerHTML="Square values of given value is"+c
}    