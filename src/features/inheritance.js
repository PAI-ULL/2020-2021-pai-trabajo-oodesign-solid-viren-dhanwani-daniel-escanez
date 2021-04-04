/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @desc Inheritance example using the Person and Teacher classes
  * @see https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Inheritance
  */

'use strict';

/** Class that gathers information about a person */
class Person {
  /**
   * Create a Person
   * @param {String} first - First name
   * @param {String} last - Last name
   * @param {Number} age - The age value
   * @param {String} gender - The gender value
   * @param {Array<String>} interests - List of interests
   */
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  /** Outputs the person greeting and saying her name */
  greeting() {
    console.log('Hi! I\'m ' + this.name.first);
  };

  /** Outputs the person farewell and her name */
  farewell() {
    console.log(this.name.first + ' has left the building. Bye for now!');
  };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();   // Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();  // Leia has left the building. Bye for now

/* 
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    this.name = {
      first,
      last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
*/

/**
 * Class that gathers information about a Teacher
 * @extends Person
 */
class Teacher extends Person {
  /**
   * Create a Teacher
   * @param {String} first - First name
   * @param {String} last - Last name
   * @param {Number} age - The age value
   * @param {String} gender - The gender value
   * @param {Array<String>} interests - List of interests
   * @param {String} subject - The subject that she is teaching
   * @param {Number} grade - The grade where she is teaching
   */
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();           // Hi! I'm Severus.
snape.farewell();           // Severus has left the building. Bye for now.
console.log(snape.age);     // 58
console.log(snape.subject); // Dark arts
