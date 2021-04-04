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
    this.options_ = settings.options;
    this.setup();
  }
  /**
   * Setup the DOMTraverser
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

const DOM_TRAVERSER = new DOMTraverser({
  rootNode: 'body',
  options: {
    animationModule: () => {
      // ...
      return {setup: () => console.log('Animating...')};
    },
  },
});

console.log(DOM_TRAVERSER);
