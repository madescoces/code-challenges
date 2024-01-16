/*
 * Reto #5
 * ASPECT RATIO DE UNA IMAGEN
 * Fecha publicación enunciado: 01/02/22
 * Fecha publicación resolución: 07/02/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
 * - Nota: Esta prueba no se puede resolver con el playground online de Kotlin. Se necesita Android Studio.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 */

import sharp = require('sharp')
import path = require('path')
//import { FactorMe } from '../helpers/factorize'

sharp(path.join(__dirname, 'girl.jpg'))
  .metadata()
  .then(function (metadata) {
    const image_mcd = mcd(metadata.width, metadata.height)
    console.log('Width: ' + metadata.width + ' Height: ' + metadata.height)
    //console.log('Máximo común divisor: ', image_mcd)
    //console.log('Width Factors: ', FactorMe(metadata.width))
    //console.log('Height Factors: ', FactorMe(metadata.height))
    const aspectRatio = `${metadata.width / image_mcd}:${
      metadata.height / image_mcd
    }`
    console.log(`Image aspect ratio: ${aspectRatio}`)
    console.log(`Decimal aspect ratio: ${(metadata.height / metadata.width).toFixed(4)} `)
  })

// Calculamos el máximo común divisor (MCD)
const mcd = (a: number, b: number): number => (b === 0 ? a : mcd(b, a % b))
