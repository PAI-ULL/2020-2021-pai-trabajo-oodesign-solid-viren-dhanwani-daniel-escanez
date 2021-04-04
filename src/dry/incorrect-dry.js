/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @since 03.Apr.2021
  * @desc Outputs information about daily climatologies in Santa Cruz de Tenerife
  * @see http://www.aemet.es/es/datos_abiertos/AEMET_OpenData
  */

'use strict';

import { readFile } from 'fs/promises';

/**
* Transforms a JSON file into an object
* @param {String} filepath path of the input file
* @return {Object} data obtained
*/
const getData = async (filepath) => {
  return JSON.parse(await readFile(filepath));
};

/**
 * Computes which day has the highest temperature
 * @param {Array<Object>} data daily information of the weather in Santa Cruz de Tenerife
 * @param {String} key property of the object to be analyzed
 * @return {Object} day with the highest temperature
 */
 const highestTemperature = (data) => {
  return data.reduce((max, day) => {
    const actual = Number(parseFloat(day['tmax'].replace(',', '.')));
    const maximum = Number(parseFloat(max['tmax'].replace(',', '.')));
    return actual > maximum ? day : max;
  });
};

/**
 * Outputs the day with the highest temperature
 * @param {Oject} data daily information of the weather in Santa Cruz de Tenerife
 */
const showHighestTemperature = (data) => {
  const HIGHEST_TEMPERATURE = highestTemperature(data);
  console.log('The highest precipitation day is ' + HIGHEST_TEMPERATURE.fecha + ' at ' + HIGHEST_TEMPERATURE.prec);
};

/**
 * Computes which day has the highest precipitation
 * @param {Array<Object>} data daily information of the weather in Santa Cruz de Tenerife
 * @param {String} key property of the object to be analyzed
 * @return {Object} day with the highest precipitation
 */
 const highestPrecipitation = (data) => {
  return data.reduce((max, day) => {
    const actual = Number(parseFloat(day['prec'].replace(',', '.')));
    const maximum = Number(parseFloat(max['prec'].replace(',', '.')));
    return actual > maximum ? day : max;
  });
};

/**
 * Outputs the day with the highest precipitation
 * @param {Oject} data daily information of the weather in Santa Cruz de Tenerife
 */
const showHighestPrecipitation = (data) => {
  const HIGHEST_PRECIPITATION = highestPrecipitation(data);
  console.log('The highest precipitation day is ' + HIGHEST_TEMPERATURE.fecha + ' at ' + HIGHEST_TEMPERATURE.prec);
};

/**
 * Main program that outputs information about the weather in Santa Cruz de Tenerife
 */
const main = async () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    throw new Error('[ERROR] A file must be specified as argument');
  }

  const DATA = await getData(args[0]);

  showHighestTemperature(DATA);
  showHighestPrecipitation(DATA);
};

main().catch((err) => console.log(err.message));
