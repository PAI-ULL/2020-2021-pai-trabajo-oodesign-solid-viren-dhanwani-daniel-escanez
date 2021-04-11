/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that follows the Interface Segregation Principle
  *     “Clients should not be forced to depend upon the interfaces
  *     that they do not use”
  *     This code is an adaptation of the principle in JavaScript, and
  *     does not force the user to implement the animationModule
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
    this.options_ = settings.options;
    this.setup();
  }
  /**
   * Setup the InteractiveProgram
   */
  setup() {
    this.rootNode_ = this.settings_.rootNode_;
    console.log('Setting up...');
    this.setupOptions();
  }
  /**
   * Check that an animation module exist and performs the setup
   */
  setupOptions() {
    if (this.options_.animationModule) {
      this.options_.animationModule().setup();
    }
  }
}

const INTERACTIVE_PROGRAM = new InteractiveProgram({
  rootNode: 'body',
  options: {
    animationModule: () => {
      // ...
      return {setup: () => console.log('Animating...')};
    },
  },
});

console.log(INTERACTIVE_PROGRAM);
