function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;

}

Person.prototype.greet=function(){
    console.log('Hi '+this.firstname);
}

var john=new Person('John','Doe');
console.log(john.firstname + ' '+john.lastname);
john.greet();
console.log(john.__proto__);

var jane=new Person('Jane','Doe');
console.log(jane.firstname + ' '+jane.lastname);
console.log(jane.__proto__);
jane.greet();

function Computer(){
    this.person=Person
    this.brand='';
    this.os='';
    this.model='';
    this.toString=function(){
        console.log(this.brand+' '+this.model+' '+this.os);
    }
}

var laptop=new Computer();
laptop.brand='Dell';
laptop.model='XPS'
laptop.os='Windows 10';
laptop.toString();


var Computer2=Object.create(Object.getPrototypeOf(Computer),{
    "price":{value:0}
});

//Implementing Inheretance
Computer3.prototype=new Computer();
Computer3.prototype.constructor=Computer3;
Computer3.prototype.toString=function(){
    console.log(this.brand+' '+this.model+' '+this.os+' '+this.price);
};
function Computer3(price){
    this.price=price;
}

var laptop2=new Computer3(10);

laptop2.brand='Apple';
laptop2.model='MacBook Ai3';
laptop2.os='MacOS Sierra';
laptop2.toString();


