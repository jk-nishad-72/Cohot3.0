

// NOw Classical Inheritance
/**
 * Inheritance
 * Method OverRiding 
 * 
 * 
 * 
 */



class User {

    constructor(fname , lname , contact){
        this.fname = fname
        this.lname = lname
        this.contact = contact
    }

    greet(){
        console.log(`Hello I am ${this.fname}`)
    }
}

class Admin extends User{

    //  constructor(fname , lname , contact){
    //     this.fname = fname
    //     this.lname = lname
    //     this.contact = contact
    // }

    // or 

     constructor(fname , lname , contact){
        super(fname,lname,contact)
        this.adMinAccess = true;


    }
}

const user1 = new User('jay' ,'nishad','cg' )

const user2 = new Admin('sarthak', 'sharma', 'bhopal')

console.log(user1 );


// Inherite the User's class method 
console.log(user2.greet()) 


class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();

