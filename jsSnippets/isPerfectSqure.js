

var isPerfectSquare = function(num) {
    
    let flag = false;
    for (let i =0; i<= num ; i++ ){
        
        if(i*i ==  num ){
          flag = true; 
          break; 
        }else if(i*i > num){
          break;
        }
        
    }
    return flag;
};

isPerfectSquare(133)