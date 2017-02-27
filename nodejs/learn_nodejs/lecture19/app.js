var person={
    firstname:'John',
    lastname:'Doe',
    greet:function(){
        console.log("Hi "+this.firstname+ " "+this.lastname);
    }
}

person.greet();
console.log(person['firstname']);