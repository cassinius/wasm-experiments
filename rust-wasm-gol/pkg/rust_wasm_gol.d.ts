/* tslint:disable */
/* eslint-disable */
export class Universe {
  free(): void;
/**
* Constructor
* @param {number | undefined} width 
* @param {number | undefined} height 
* @returns {Universe} 
*/
  static new(width?: number, height?: number): Universe;
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
  cells_from_p(): number;
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
* Resets one / all cells to some state.
* @param {number} row 
* @param {number} column 
*/
  toggle_cell(row: number, column: number): void;
/**
*/
  reset_cells(): void;
/**
*/
  randomize_cells(): void;
/**
* Universe evolution
* @param {number} nr_ticks 
*/
  ticks(nr_ticks: number): void;
}
