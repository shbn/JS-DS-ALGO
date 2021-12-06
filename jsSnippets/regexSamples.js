
/*

^ starting char
$ Enfding char
() Catch for compare
\1  compare againist catch2
[..] any of chars can come 
[a-zA-Z0-9] All alpha chars and numbers
.* any chars



*/

//Check for starting with a vowel and ending with same charecter. 


let str = "aassa"  // a.. <=> ..a
let match = str.match(/^([aeiou]).*\1$/)


//Compare first and second chars with past 2 chars 

let str = "a4gfgfgf4a" // a4 <=> 4a

let match = str.match(/^([a-z])([0-9]).*\2\1+$/)