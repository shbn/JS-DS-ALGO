// Create a debounce utility function that takes a function and creates a new function
// that delays invocation on the original until after a set amount of time has elapsed
// since the last time it was called

// your code here

// function runFunc(func, arg){
//     func(arg)
//   }



function debounce(func, wait) {
  let trigger = false;
  let timer = null;
    return (arg)=>{
      clearTimeout(timer);
      if(!trigger){
        trigger = true;
      } else{
         timer = setTimeout(()=>{
          func(arg)
          trigger = false;

        }, wait);
      }
  }

  
}
// test setup
var start = Date.now();

function greet(name) {
  console.log('hi ' + name + '!');
  console.log('(roughly ' + String(Date.now() - start) + 'ms after start)');
}
 
const debouncedGreet = debounce(greet, 200);
  


debouncedGreet('dylan');
debouncedGreet('dylan2');
debouncedGreet('dylan3');

/* expected output

hi dylan!
(roughly 202ms after start)

*/