
// function statement

function greet(){
    console.log('Hi');
}

greet();

// function are first-class

function logGreet(fn){
    fn();

}

logGreet(greet);

//

var greetMe=function(){
    console.log('Hi Victor');
}
greetMe();
logGreet(greetMe);


//function expression on the tly

logGreet(function(){
    console.log('Hi Victor!!!')
})