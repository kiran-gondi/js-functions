//console.log('Helo World');

//Chapter 2 - Writing Modular Code with Functions - START
    //Introducing Functions
    //Defn: A function is a block of organized, reusable code that is used to perform
    //a single, related action.
    
    //Defn: An argument is a value that we pass to the function when we inovke it.

    //Defn: A parameter is a variable that we list as part of a function definition.

    /*function greetings(){
        return 'Hello John!';
    }
    let message = greetings();
    console.log(message);

    function sum(num1, num2){
        return num1 + num2;
    }
    let result = sum(2, 4);
    console.log(result);

    function printAll(){
        for(let i = 0; i < arguments.length; i++){
            console.log(arguments[i]);
        }
    }

    printAll(1, 2, 3, 4, 5);
    printAll(20, 30);*/
    
    //Understanding Function Scope
    /*function greeting(){
        let message = 'Hello';
        let sayHi = function hi(){
            let message = 'Hi';
            //message = 'Hi';
        };
        sayHi();
        console.log(message);
    }
    greeting();*/

    //Understanding Block Scope
    //NOTE: Variables declared with the var keyword or within 
    //function declarations DO NOT have block scope.
    /*let message = 'Hello';
    if(message === 'Hello'){
        let count = 100;
    }
    console.log(count);*/

    //IIFE: Immediately Invoked Function Expression
    //Defn: Function Expression: Define a function and assign it to a variable.
    //Immediately Invoked: Invoking the function right away where it's defined.
    /*(function (){
        console.log("Hello"); 
    })();*/

    //CLOSURE: How Closures work
    /*let greeting = (function(){
        let message = 'Hello';
        let getMessage = function(){
            return message;
        };

        return {
            getMessage: getMessage
        }
    })();
    console.log(greeting.getMessage());//Hello

    function setupCounter(val){
        return function counter(){
            return val++;
        }
    }
    let counter1 = setupCounter(0);
    console.log(counter1()); //0
    console.log(counter1()); //1
    let counter2 = setupCounter(10);
    console.log(counter2()); //10*/
//Chapter 2 - Writing Modular Code with Functions - END

//Chapter 3 - Improving Readability with Arrow Functions - START
    //Demo of Arrow Functions
    /*function sum(num1, num2){
        return num1 + num2;
    }
    let output = sum(10, 20);
    console.log(output);

    let sumArrow = (num1, num2) => num1 + num2;
    let outputFromArrow = sumArrow(10, 1);
    console.log(outputFromArrow);*/

    /*this = refers to the owner of the function we are executing.
    Unlike regular functions arrow functions do not have their own 
    this value. Morever, the value of this is always inherited 
    from the enclosing scope.*/
    /*let message = {
        name:  'John',
        regularFunction: function(){
            console.log(this);
            console.log('Hello ' + this.name);
        },
        arrowFunction: ()=> console.log('Hi ' + this.name)
    };

    message.regularFunction();
    message.arrowFunction();
    console.log(this);*/

//Chapter 3 - Improving Readability with Arrow Functions - END

//Chapter 4 - Changing Function Context and Built-in Functions - START

    //Understanding Function Context
    /*function sayHi(){
        console.log('Hi');
        console.log(this);
    }
    sayHi(); //Hi
             // Window {...}*/

    /*let greeting = {};
    greeting.sayHi = function(){
        console.log('Hi');
        console.log(this);
    }
    greeting.sayHi(); //Hi
                      //{sayHi:f}*/

    /*function sayHi(){
        console.log('Hi');
        console.log(this);
    }                     
    let greeting = new sayHi(); //Hi
                                //[obj Object] */

    //What is the call Method?
    /*let person1 = {name: 'John', age:22 };                                
    let person2 = {name: 'Mary', age:19 };
    
    let sayHi = function(){
        console.log('Hi, ' + this.name);
    }
    sayHi();
    person1.call();
    sayHi.call(person1);
    sayHi.call(person2);*/

    //What is the apply Method?
    /*function introduction(name, profession){
        console.log("My name is " + name + " and I am a " + profession + ".");
    }

    introduction("John", "student");

    introduction.apply(undefined, ["Mary", "Lawyer"]);
    introduction.call(undefined, "Jon", "Pianist");*/
    //Notes:
    //Use apply() when we have array input with similar elements.
    //Use call() when we have individual arguments of varying type.

    //What is the bind Method?
    /*let person1 = {
        name: 'Mary',
        getName: function(){
            return this.name;
        },
        getPrintStatement: function(){
            return "Hey from getPrintStatement";
        }
    };

    let person2 = {
        name: 'John'
    };

    let getNameCopy = person1.getName.bind(person2);
    let getPrintStatementCopy = person1.getPrintStatement.bind(person2);

    console.log(getNameCopy);
    console.log(getNameCopy());
    console.log(getPrintStatementCopy);
    console.log(getPrintStatementCopy());*/

    //Using Built-in Functions
    //eval(): Accepts the string as input, a valued set and returns a value.
    /*let x = 1; 
    let y = 2;
    console.log(eval('x + y + 1'));//4

    let s = 'abc';
    console.log(eval('x + y + s')); //3abc*/

    //parseInt(): parses a string and returns an integer
    /*console.log(parseInt('F', 16)); //15
    console.log(parseInt('15', 10)); //15
    console.log(parseInt('Hi', 16)); //15*/

    //parseFloat(): parses a string and returns an floating point number
    /*console.log(parseFloat('3.99')); //3.99
    console.log(parseFloat('3.99e-1')); //3.99
    console.log(parseFloat('')); //3.99*/

    //escape(): escape returns the hexadecimal encoding of an arugument in the isolated one character set.
    /*console.log(escape('text')); // text
    console.log(escape(' '));    // %20
    console.log(escape('abc&%'));//abc%26%25 */

    //unescape(): does the opposite of escape. Returns the string for the ascii value.
    /*console.log(unescape('text')); //text
    console.log(unescape('%20')); // 
    console.log(unescape('abc%26%25')); //abc&%  */
//Chapter 4 - Changing Function Context and Built-in Functions - END

//Chapter 5 - Constructing Rest Parameters and the Spread Operator - START

    //What are Default Parameters?
    //Default Parameters allows you to give a default parameter to a function.
    /*function sayHi(name='World'){
        console.log('Hello ' + name);
    }
    sayHi();
    sayHi('John');
    console.log('----------------------------------');*/
    /*function sayHi(message, name = 'World'){
        console.log(message + " " + name);
    }
    sayHi("Hello");
    sayHi("Hi", "John");
    console.log('----------------------------------');*/
    //Therefore, Always declare the defalut parameters only after the regular parameters declartion is done.
    /*function sayHi(name = 'World', message){
        console.log(message + " " + name);
    }
    sayHi("Hello");
    sayHi("Hi", "John");*/

    //Constructing Rest Parameters
    //Can define a function to store multiple arguments in a single array.
    //Specially useful when we are invoking a function with multiple arguments.
    //It always stores the rest or remaining arguments as an array.Hence it gets this name.
    /*function greet(message, ...names){
        console.log(message + ' everyone');
        names.forEach(name => console.log('Hi ' + name));
    }

    greet('Welcome', 'Mary', 'Bob', 'Martin');*/

    /*function greet(...names){
        names.forEach(name => console.log('Hi ' + name));
    }

    greet('Welcome', 'Mary', 'Bob', 'Martin');*/

    /*function greet(...names, message){
        console.log(message + ' everyone');
        names.forEach(name => console.log('Hi ' + name));
    }

    greet('Welcome', 'Mary', 'Bob', 'Martin');*/

    //Using the Spread Operator
    //A Spread Parameter is the opposite of how the Rest Paramete work.
    //It allows a function to take an array as an argument and then spread out 
    //its elements so that they can be assigned to individual parameters.
    /*function display(char1, char2, char3, char4){
        console.log(char1, char2, char3, char4);
    }
    let letters = 'abcd';
    display(...letters);
    let lettersAdditonal = 'abcdefg';
    display(...lettersAdditonal);*/

    /*function display(char1, char2, char3, char4, ...others){
        console.log(others);
        console.log(char1, char2, char3, char4);
    }
    let lettersAdditonal = 'abcdefg';
    display(...lettersAdditonal);*/

//Chapter 5 - Constructing Rest Parameters and the Spread Operator - END
