let person ={
	name:"Super Hero",
	age:"30"
}
function print(){
	console.log(`Name:${this.name} ( ${this.age} ) `);
}


print.call(person);   //""Name:Super Hero ( 30 ) ""


function print1(place,country){
	console.log(`Name:${this.name} ( ${this.age} )  from ${place}, ${country} `);
}

print1.call(person,"Mumbai","India");  // "Name:Super Hero ( 30 )  from Mumbai, India "
print1.apply(person,["Delhi","India"]); // "Name:Super Hero ( 30 )  from Delhi, India "

print2 = print1.bind(person);

print2("NY","USA");  //"Name:Super Hero ( 30 )  from NY,USA "

/*
  Call - accepts arguments separately 
  >  func.call(conextObject, arg1, arg2,..)
  
  
  Apply - accepts arguments as an array  
  > func.apply(conextObject,[ arg1, arg2,..])
	
  Bind returns a function. Function needs to be invoked later
  
  newFunc =  oldFunc.bind(conextObject);
  newFunc(arg1, arg2,..)


*/