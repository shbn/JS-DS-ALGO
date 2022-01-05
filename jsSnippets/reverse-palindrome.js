//var message = "How are you madam"    

//1. reverse each word without changing their position?  //  woH era uoy
// 2. Display all the paliodrome words // madam

// Use only core js -  push & pop  -  for , if 


function reverse(str){
    let word = [];
    let  wordR = "";
    for (let x= 0; x< str.length; x++){

        if(str[x] != ""){
            word.push(str[x]);
            wordR = str[x] + wordR;
        }else{
            if(word.length){
                console.log(wordR)
                if(wordR == word.toString()){
                    console.log(`paliandrome:${wordR}` ) ;
                }
                word = [];
            }
        }
    }

}