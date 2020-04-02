/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name 
*/
export function greet(name: string): void;
export class Universe {
  free(): void;
/**
* Getters
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  cells(): number;
/**
* Setters
* @param {number} width 
*/
  set_width(width: number): void;
/**
* @param {number} height 
*/
  set_height(height: number): void;
/**
* @returns {Universe} 
*/
  static new(): Universe;
/**
*/
  tick(): void;
}
