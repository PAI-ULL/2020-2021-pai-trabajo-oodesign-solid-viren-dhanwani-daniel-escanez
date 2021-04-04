/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that doest not follow the Interface Segregation Principle
  * @see https://en.wikipedia.org/wiki/Interface_segregation_principle
  */

'use strict';

class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() { } // Most of the time, we won't need to animate when traversing.
  // ...
});
