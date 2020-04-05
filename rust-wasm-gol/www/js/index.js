// Import the WebAssembly memory at the top of the file.
import { memory } from "rust-wasm-gol/rust_wasm_gol_bg";
import { Universe } from "rust-wasm-gol";
// attaches a window.FPSMeter constructor function
// import value is useless for instantiation
import * as FPSMeter from "./FPSMeter";
const fps_meter = new window.FPSMeter({
	left: 'auto',
	right: '5px',
	heat: 1,
	graph: 1,
	theme: 'transparent'
});


const UNIVERSE_SIZE = 384;
const CELL_SIZE = 2;
const GRID_COLOR = "#111111";

const CELL_CONDITIONS = {
	alive: {
		value: true,
		color: "#33ff54"
	},
	dead: {
		value: false,
		color: "#ff3000" // Just to see what we render
	}
};
const TICKS_PER_DRAW_TEXT = "Speed: ";
let TICKS_PER_ROUND = 1;

// Construct the universe, and get its width and height.
const universe = Universe.new(UNIVERSE_SIZE, UNIVERSE_SIZE);
const width = universe.width();
const height = universe.height();

// Give the canvas room for all of our cells and a 1px border
// around each of them.
const canvas = document.getElementById("game-of-life-canvas");
const ctx = canvas.getContext("2d");
console.log('canvas CONTEXT: ', ctx);

canvas.height = CELL_SIZE * height;
canvas.width = CELL_SIZE * width;
const ticks_per_draw_slider = document.querySelector("#ticks-per-draw");
const ticks_per_draw_text = document.querySelector("#ticks-per-draw-text");
const reset_dead = document.querySelector("#reset-dead");
const reset_random = document.querySelector("#reset-random");

ticks_per_draw_slider.addEventListener('change', e => {
	const val = e.target.value;
	console.log(`Setting ticks per draw to: ${val}`);
	TICKS_PER_ROUND = val;
	ticks_per_draw_text.textContent = TICKS_PER_DRAW_TEXT + val;
});

reset_dead.addEventListener('click', () => {
	universe.reset_cells();
	drawGrid();
	drawCells();
});

reset_random.addEventListener('click', () => {
	universe.randomize_cells();
	drawGrid();
	drawCells();
});

/**
 * (CELL_SIZE + 1) + 1 ??
 */
const drawGrid = () => {
	ctx.beginPath();
	ctx.strokeStyle = GRID_COLOR;
	// Vertical lines.
	for (let i = 0; i <= width; i++) {
		ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
		ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
	}
	// Horizontal lines.
	for (let j = 0; j <= height; j++) {
		ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);
		ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
	}
	ctx.stroke();
};


const getIndex = (row, column) => {
	return row * width + column;
};

const drawCells = () => {
	const cellsPtr = universe.cells();
	const cells = new Uint8Array(memory.buffer, cellsPtr, width * height / 8);

	ctx.clearRect(0, 0, (CELL_SIZE + 1) * width + 1, (CELL_SIZE + 1) * height + 1);
	ctx.beginPath();
	ctx.fillStyle = CELL_CONDITIONS.alive.color;

	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			const idx = getIndex(row, col);
			if ( !bitIsSet(idx, cells) ) {
				continue;
			}
			ctx.fillRect(
				col * (CELL_SIZE),
				row * (CELL_SIZE),
				CELL_SIZE,
				CELL_SIZE
			);
		}
	}
	ctx.stroke();
};

const bitIsSet = (n, arr) => {
	const byte = Math.floor(n / 8);
	const mask = 1 << (n % 8);
	return (arr[byte] & mask) === mask;
};

/**
 * ANIMATION (play-pause)
 */
let animationId = null;
const isPaused = () => {
	return animationId === null;
};

const playPauseButton = document.querySelector("#play-pause");

const play = () => {
	playPauseButton.classList.remove('paused');
	playPauseButton.classList.add('playing');
	playPauseButton.textContent = "⏸";
	renderLoop();
};

const pause = () => {
	playPauseButton.classList.remove('playing');
	playPauseButton.classList.add('paused');
	playPauseButton.textContent = "⛰";
	cancelAnimationFrame(animationId);
	animationId = null;
};

playPauseButton.addEventListener("click", event => {
	if (isPaused()) {
		play();
	} else {
		pause();
	}
});

const renderLoop = () => {
	// debugger;
	fps_meter.tickStart();
	universe.ticks(TICKS_PER_ROUND);
	// drawGrid();
	drawCells();
	animationId = requestAnimationFrame(renderLoop);
	fps_meter.tick();
};
// Just draw the initial state (and wait for player to click 'play')
// drawGrid();
drawCells();
