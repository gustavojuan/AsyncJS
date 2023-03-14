function* gen() {
  yield 1;
  yield 2;
  yield 3;
}


const g = gen(); 
console.log(g.next().value);//1
console.log(g.next().value);//2
console.log(g.next().value);//3


function* iterate(array){
    for (let item of array) {
           yield item; 
    }
}

const i = iterate(['oscar','ana','lucía','omar']);

console.log(i.next().value);//oscar
console.log(i.next().value);//ana
console.log(i.next().value);//lucía
console.log(i.next().value);//omar