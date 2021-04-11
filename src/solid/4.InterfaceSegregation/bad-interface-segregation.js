/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that does not follow the Interface Segregation Principle
  *     “Clients should not be forced to depend upon the interfaces
  *     that they do not use”
  *     This code is an adaptation of the principle in JavaScript, and it forces the
  *     user of the class to depend upon the 'animationModule' when using 'setup()'
  * @see https://en.wikipedia.org/wiki/Interface_segregation_principle
  */

'use strict';

/** Class that simulates a InteractiveProgram */
class InteractiveProgram {
  /**
   * Creates a InteractiveProgram
   * @param {Object} settings
   */
  constructor(settings) {
    this.settings_ = settings;
    this.setup();
  }
  /**
   * Setup the InteractiveProgram
   */
  setup() {
    this.rootNode_ = this.settings_.rootNode;
    console.log('Setting up...');
    this.settings_.animationModule().setup();
  }
}

const INTERACTIVE_PROGRAM = new InteractiveProgram({
  rootNode: 'body',
  animationModule: () => {
    // ...
    return {setup: () => console.log('Animating...')};
  }, // Most of the time, we won't need to animate when interacting
});

console.log(INTERACTIVE_PROGRAM);
