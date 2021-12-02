//incomplete


let nestedData = {
  name: 'Abc',
  age: '29',
  address: {
    pincode: '110011',
    area: 'bangalore',
    state: 'karnataka',
    location: {
      lat: '122.21',
      long: '11.21',
    },
    phone: '1212121',
  },
};

function nestedObject(obj){

let 	keys = Object.keys(obj,prefix="") ;
//console.log(keys);

let retObj = {};

keys.forEach((key) =>{

	if(typeof obj[key] === "object"){
   //console.log("nested loop"+ obj[key]);
   	prefix = prefix+"__"+key;
    console.log(prefix);
   	let subObj = nestedObject(obj[key],prefix)
    retObj = {...retObj,...subObj};
   
  } else {
  	console.log(key + " : "+obj[key]);
    retObj[key] = obj[key];
    
    //console.log("here "+ {retObj[key] : obj[key]} );
  
  }

	//console.log(typeof obj[key])
  
  return retObj;

});



}

console.log(nestedObject(nestedData));

//output 

/* {
  "nestedData_name": "Abc",
  "nestedData_age": "29",
  "nestedData_address_pincode": "110011",
  "nestedData_address_area": "bangalore",
  "nestedData_address_state": "karnataka",
  "nestedData_address_location_lat": "122.21",
  "nestedData_address_location_long": "11.21",
  "nestedData_address_phone": "1212121"
} */