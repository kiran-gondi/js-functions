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