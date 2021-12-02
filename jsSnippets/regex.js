//incomplete logic



var regex=function(str,expression){

	let flag = false;
  if(!expression.includes("*") && !expression.includes(".") ){
  	
  	flag = str===expression;
  }else {
  	
    let strArr = str.split("");
    let expArr = expression.split("");
    let breakString = false;
    let expCount =0;
    let prevChar = "";
    for (i=0;i<strArr.length;i++){ // O(n)

    	if(expArr[expCount] == "."){
         expCount++;
       
         
      } else if ( expArr[expCount] == "*" ){
      
      	//missing logic here
      	//	breakString = prevChar === strArr[i];
      	
      }else {
      	//console.log("###");
      		prevChar= strArr[i] ;
      		let nextChar = expArr[expCount+1];
          
    		  if(nextChar !== "*" && strArr[i] !==  expArr[expCount]){
      		
      			breakString = true;
            break;
      	
      		}
          expCount++;
      }
    }
    
    flag = breakString ? false:!flag;
  	
  }
  
  
  
  return flag;

}

console.log(regex("aa", "a") === false);
console.log(regex("aa", "a*") === true);
console.log(regex("ab", ".*") === true);  
console.log(regex("aab", "c*a*b") === true); 
console.log(regex("mississippi", "mis*is*p*.") === false); 

/* console.log(regex("ippi", "s*p*.") === false);  */