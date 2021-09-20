/**
* @(Description) : Function is used to figure out the type of input parameter
* @(Parameter) : The function could accept following parameters String, Boolean, Number, Function, Object, Undefined, Null
* @(Return) : The function return a string specifying the type of the argument passed.
*/
const getTypeOfVar = (para) => {
	if (para === null) {
		return "Null is not allowed";
	}

	let message;

	let obj = {
		'string':1,
		'boolean':2,  
		'number':3,
		'object':4,
		'function':5
	};

	switch(obj[typeof para]){
		case 1:
			message = "String";
			break;
		case 2:
			message = "Boolean";
			break;
		case 3:
			message = "Number";
			break;
		case 4:
			message = Array.isArray(para) ? "Array" : "Object" ;
			break;
		case 5:
			message = "Function";
			break;
		default:
			message = "Please enter a valid value";
	}
	return message;
}

// Assigning different data value to variable x
let x;
x = null;
// x = undefined;
// x = 5;
// x = "Callipso";
// x = () => {}
// x = {};
// x = [];
console.log(getTypeOfVar(x));
