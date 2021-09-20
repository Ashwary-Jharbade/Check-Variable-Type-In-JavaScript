# Check-Variable-Type-In-JavaScript
Checking the type of variable in javascript

### Algorithm 

- step 1. Initializing an object containing key value pair of string representation data types and assigning them numeric constants.
- step 2. Declaring a variable for storing the final output message.
- step 3. Checking if the passed parameter is null.
		- step 3.1. If yes returning a string with message 'Null is not allowed'.
		- step 3.2. Going to next step.
- step 4. Defining a switch case with checking the type of the parameter passed. And passing the result to the object containing key value pair.
		- step 4.1. If parameter is of type `string` case `1` get executed and stores the message in the `message` variable.
		- step 4.2. If parameter is of type `boolean` case `2` get executed and stores the message in the `message` variable.
		- step 4.3. If parameter is of type `number` case `3` get executed and stores the message in the `message` variable.
		- step 4.4. If parameter is of type `object` case `4` get executed and stores the message in the `message` variable.
		- step 4.5. If parameter is of type `function` case `5` get executed and stores the message in the `message` variable.
		- step 4.6. Default case if any of the above case do not get executed the `message` variable stores the message for undefined case.
- step 5. Print the `message` variable


### Code

```javascript
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

```
