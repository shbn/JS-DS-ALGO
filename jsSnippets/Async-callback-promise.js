
//  async - Promise  functions

// SetTimeout

function asyncFun() {
	console.log("Async")
  return ("Async");
}

console.log(1);
setTimeout(asyncFun,0)
console.log(2);
console.log(3);

/** out put 
1
2
3
"Async"

*/





//Callbacks

function callback(arg) {
	console.log("callback" + arg)

}
function main(arg, cb){
 console.log(1);
 cb(arg)
 console.log(2);
 console.log(3);
}

main(10,callback);

/** out put 
1
"callback10"
2
3
*/



//  setInterval  , clearInerval

var x = 0;
 console.log(x++);
var inter = setInterval(callback,200);
 console.log(x++);
 console.log(x++);
 console.log(x++);

 function callback() {
	console.log("cb" + (x++))
  
  if(x == 10 ){
  clearInterval(inter)
  }
}
/** out put 
0
1
2
3
"cb4"
"cb5"
"cb6"
"cb7"
"cb8"
"cb9"
*/


// Promise 

let myPromise = new Promise(function(myResolve, myReject) {
    
      //steps to check or and XHR call

      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
);

//Exmple

let val =8;
let checkDeal = (resolve,reject)=>{
console.log("inside Promise"+val)
 if(val >10){
    resolve("yess");
  }else {
    reject("No")
  }
}

let deal = new Promise(checkDeal);
deal.then(
	(val)=>{console.log("success:"+val)},
    (error)=>{console.log("Error:"+error)}
  
 )

 /** Out put
  
>> let val = 12

"inside Promise12"
"success:yess"   
   -----

>>  let val = 8
"inside Promise8"
"Error:No"


  */

// Async -  simple promise

let xyz = async function checkDeal(val) {
    console.log("inside async ", val);
    return val >10;
}
let value = 20;

xyz(value).then(
    function(val) {
        show("Success:"+val);
    }
);

function show(data){
    console.log(data)
}
 /* Output

"inside async ", 20
"Success:true"

 */

// Async - Await

async function show() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Resolved");
    });
    console.log(await myPromise) ;
  }
  
show();

/* Output

"Resolved"

 */
