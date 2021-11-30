///test performance of a function


function toDo(){
	let cc =0;
	
  for(let i=0; i<1000000000; i++){
     cc = cc + i;
  }
  console.log(cc);

}

let start = performance.now();
toDo();
let end = performance.now();

console.log("script exec time: "+( end-start)+"ms");
