//self invoking functions  ()();

// Nrmal function invoking 

function xyz(){
	console.log("xyz")
}
xyz();

//one liner

    // #1 

    (console.log("ss"))()  

    // #2 //invoke other function

    (xyz)()  


//function multiple actions (Functions)

(()=>{
    console.log("ss");
    console.log("ssq");
})()

