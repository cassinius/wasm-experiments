/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name 
*/
export function greet(name: string): void;
export class Universe {
  free(): void;
/**
* @returns {Universe} 
*/
  static new(): Universe;
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
* @returns {number} 
*/
  diffs(): number;
/**
* Resets all cells to the dead state.
*/
  reset_cells(): void;
/**
* @param {number} row 
* @param {number} column 
*/
  toggle_cell(row: number, column: number): void;
/**
*/
  randomize_cells(): void;
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
* @param {number} nr_ticks 
*/
  ticks(nr_ticks: number): void;
}
