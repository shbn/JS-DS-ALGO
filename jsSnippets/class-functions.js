// Simple functional object creation and extension

function person(name,age){

    this.name = name;
    this.age = age;
    this.hello = function(){
        
      alert("Hello "+this.name + this.age);
    }
    
}
person.prototype.hello2 = function(){         //typeof person is function; use prototype to extend it 
    
    alert("Hello2 "+this.name + this.age);
    
}
    
let per = new person("ss",22);
per.hello2(); 
per.hello2();
//---------------------------------------

//  Extend after creating an object

function person(name,age){

    this.name = name;
    this.age = age;
    this.hello = function(){        
      alert("Hello "+this.name + this.age);
    }
    
}
let per = new person("ss",22);  //typeof per is object not function; so direclty we can extend
        
per.hello2 = function(){
    alert("Hello2 "+this.name + this.age);
}    
    
per.hello2();

//---------------------------------------

//  Simple object method 

var person={

    name:'dd', 
    age:23,
    hello:function(){
        alert("Hello "+this.name + this.age);
      }
    
    }
    
    person.hello();


//---------------------------------------

//  Simple Class Method

class Person{

	constructor(name,age){
	  this.name = name;
	  this.age = age;
  }
  hello(){
    alert("Hello "+this.name + this.age);
  }
 
}


var per = new Person("sss",33)

per.hello();



//---------------------------------------

//   Class Extend


class Person{

	constructor(name,age){
	  this.name = name;
	  this.age = age;
  }
  hello(){
    alert("Hello "+this.name + this.age);
  }
 
}

class Person2 extends Person{
	constructor(gender,...args ){
  	super(...args);
    this.gender = gender
  }
	hello2(){
  		alert("Hello2 "+this.name + this.age + this.gender);
  }
}

var per = new Person2("Male","Name",33);

per.hello(); //called parent hello
per.hello2(); // child function




//---------------------------------------

//   Class Extend with Function override


class Person{

	constructor(name,age){
	  this.name = name;
	  this.age = age;
  }
  hello(){  //parent
    alert("Hello "+this.name + this.age);
  }
 
}

class Person2 extends Person{
	constructor(gender,...args ){
  	super(...args);
    this.gender = gender
  }
	hello(){  //child
  		alert("Hello2 "+this.name + this.age + this.gender);
  }
}

var per = new Person2("Male","Name",33);

per.hello(); //called Child hello  //Hello2Name33Male