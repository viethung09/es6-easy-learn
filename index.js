"use strict"

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var p = new Person("Han", "Solo");
console.log(p);

class Employee extends Person {

  // A class body can only contain methods, but not data properties.
  // Prototypes having data properties is generally considered an anti-pattern, so this just enforces a best practice.
  // this.idName = 4564756; // failed

  doWork() {
    console.log("do work...");
  }
}

var em = new Employee();

console.log(em);
