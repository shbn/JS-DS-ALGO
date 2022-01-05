// Create a debounce utility function that takes a function and creates a new function
// that delays invocation on the original until after a set amount of time has elapsed
// since the last time it was called

// your code here

// function runFunc(func, arg){
//     func(arg)
//   }

function debounce(func, wait) {
  let timer = null;  
  return (arg)=>{
      if(timer){
      		clearTimeout(timer);      
      }
      timer = setTimeout(()=>{
         func(arg)
      }, wait);
  }
}
var start = Date.now();

function greet(name) {
  console.log('hi ' + name + '!');
  console.log('(roughly ' + String(Date.now() - start) + 'ms after start)');
}
 
const debouncedGreet = debounce(greet, 200);
  


debouncedGreet('ignore');  //ignored
debouncedGreet('trigger');  //triggered after 200ms

setTimeout(()=>debouncedGreet('2nd trigger after wait'),500);  // trigerred after 700ms