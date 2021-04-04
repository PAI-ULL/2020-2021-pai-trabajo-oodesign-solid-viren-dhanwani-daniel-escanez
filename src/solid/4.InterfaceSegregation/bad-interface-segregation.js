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
  * @see https://en.wikipedia.org/wiki/Interface_segregation_principle
  */

'use strict';

/** Class that simulates a DOMTraverser */
class DOMTraverser {
  /**
   * Creates a DOMTraverser
   * @param {Object} settings
   */
  constructor(settings) {
    this.settings_ = settings;
    this.setup();
  }
  /**
   * Setup the DOMTraverser
   */
  setup() {
    this.rootNode_ = this.settings_.rootNode;
    console.log('Setting up...');
    this.settings_.animationModule().setup();
  }
}

const DOM_TRAVERSER = new DOMTraverser({
  rootNode: 'body',
  animationModule: () => {
    // ...
    return {setup: () => console.log('Animating...')};
  }, // Most of the time, we won't need to animate when traversing
});

console.log(DOM_TRAVERSER);
