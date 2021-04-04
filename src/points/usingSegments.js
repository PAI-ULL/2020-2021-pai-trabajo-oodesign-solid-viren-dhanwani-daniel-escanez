/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @desc Using the Segment classes
  */

import {Point2D} from './point2d.js';
import {SegmentComposition} from './segmentComposition.js';
import {SegmentInheritance} from './segmentInheritance.js';

'use strict';

const firstPoint = new Point2D();
const secondPoint = new Point2D(3, 4);
const segmentComposition = new SegmentComposition(firstPoint, secondPoint);
const segmentInheritance = new SegmentInheritance(firstPoint, secondPoint);

console.log('Composition segment length: ' + segmentComposition.length());
console.log('Inheritance segment length: ' + segmentInheritance.length());
