/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 31.Mar.2021
  * @desc Polymorphism in JavaScript
  * @see https://bit.ly/3uoq4HU
  */

'use strict';

/** Class that simulates a shape */
class Shape {
  /**
   * The area of a shape is 0
   * @return {number} 0
   */
  area() {
    return 0;
  }
  /**
   * The name of the class that call the function
   * @return {string} name of the class
   */
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

/** Class that simulates a circle */
class Circle extends Shape {
  /**
   * Create a circle
   * @param {number} [radius = 0]
   */
  constructor(radius = 0) {
    super();
    this.radius_ = radius;
  }
  /**
   * Calculates the area of the circle
   * @return {number} The area
   */
  area() {
    return Math.PI * this.radius_ ** 2;
  }
}

/**
 * Class that simulated a Rectangle
 * @extends Shape
 */
class Rectangle extends Shape {
  /**
   * Create a rectangle
   * @param {number} [width = 0]
   * @param {number} [height = 0]
   */
  constructor(width = 0, height = 0) {
    super();
    this.width_ = width;
    this.height_ = height;
  }
  /**
   * Calculates the area of the rectangle
   * @return {number} The area
   */
  area() {
    return this.width_ * this.height_;
  }
}

/**
 * Class that simulated a Triangle
 * @extends Shape
 */
class Triangle extends Shape {
  /**
   * Create a triangle
   * @param {number} [base = 0]
   * @param {number} [height = 0]
   */
  constructor(base = 0, height = 0) {
    super();
    this.base_ = base;
    this.height_ = height;
  }
  /**
   * Calculates the area of the triangle
   * @return {number} The area
   */
  area() {
    return this.base_ * this.height_ / 2;
  }
}

/**
 * Print the array of shapes with its names and areas, return the total area
 * @param {Array<numbers>} shapes
 * @return {number} Total area
 */
function cumulateShapes(shapes) {
  return shapes.reduce((sum, shape) => {
    if (shape instanceof Shape) {
      console.log('Shape: ' + shape.toString() + ' - area: ' + shape.area());
      return sum + shape.area();
    }
    throw Error('Bad argument shape');
  }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];
console.log(cumulateShapes(shapes));
