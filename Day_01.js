console.log("Hello Systems") 

// Ctrl + ~ is the shortcut to open terminal.
// Ctrl+? is the short key to comment
/* Variables - {1.let 2.const 3.var} */ 
// PR stands for - Pull Request
// UAT (User acceptance test) development environment
// Primitive and Non-Primitive Datatypes
// Primitive - number - string - boolean - null - undefined - symbol
// Non-Primitive - objects - arrays (Always passed by reference)
// For documentation: https://tc39.es/
// https://developer.mozilla.org/en-US/
// String lightweight - travel on network layer
// why,when we don't add ; or why do we add ; at the end
// todo: Methods related to string
// todo: Browser - inspect element -> check methods

const message = "Hello ITM"; // We cannot change message afterwards if we use const.
console.log(message)

// To check datatype of any variable keyword - (typeof())

console.log("Checking variable datatype:",typeof(message));

let testvar; 
console.log(typeof(testvar)) //output = undefined


let testvar1=256; 
console.log(typeof(testvar1)) //output = number


let testvar2="1234"; 
console.log(typeof(testvar2)) //output = string


// Type casting

let ValueInNumber = Number ("123")
console.log(typeof(ValueInNumber)) //output = number

let checkValue = Boolean(true)
console.log(typeof checkValue); //output = boolean

let checkValue1 = true
console.log(typeof checkValue1); //output = boolean

console.log("1"+2)
console.log(1+"2")
console.log(1+2+"2")
console.log(1+2-"2")

// prefix and postfix operators

let x=100
let y=x++;
console.log("Checking ++x",++ x);
console.log("Checking x++",x ++);

let y1 = console.log("Outout of y1 is",++ x);

console.log(2=='2') // single check i-e value check
console.log(2==='2') // 2 checks (value and type check)

console.log(1!=2)

console.log("2">1) //does type conversion itself

console.log(null>0) // output: false (logic behind this is that comparison checks ASCII value)
// there is no garbage value in JS
console.log(undefined>0) //output: false

let myNum; // it is undefined (No garbage)

const company= "Systems";
const numberOfEmployee = 50000;


console.log(company +" have "+ numberOfEmployee+" employee")
console.log(`${company.toUpperCase()} have ${numberOfEmployee} employees`)


const newCompany = new String("systems") // creating string using constructor
console.log(newCompany.charAt(2))
console.log(newCompany.indexOf('y'))
console.log(company.substring(0,3))

let url="www.amiralitariq/web%20developer"
url = url.replace('%20','') // return new string only, we added url = before to save and update in the original string
console.log(url);

const employee = new Number (500000)

console.log(employee.toFixed(2))
console.log(employee.toLocaleString()) //once converted to string, we need to convert back to num to perform calculations

console.log(Math) //Check this list on Browser->Inspect Element
console.log(String)
console.log(Math.random())
console.log(Math.floor(Math.random() *10)) //to print numbers between 0 and 10