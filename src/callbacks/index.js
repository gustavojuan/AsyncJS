function sum(x, y) {
  return x + y;
}

function mul(x, y) {
    return x * y;
}  

function calc(num1, num2, operar) {
  return operar(num1, num2);
}

console.log(calc(1, 3, sum));
console.log(calc(9, 3, mul));

///////////////////////////////////

setTimeout(()=>console.log(1),5000);
setTimeout(function(){
    console.log('soy callback anónimo')
},2000);

function greeting(name){
    console.log(`Hola ${name}`);
}

setTimeout(greeting,2000,'oscar');
