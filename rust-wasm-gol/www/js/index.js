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


const CELL_SIZE = 5; // px
const GRID_COLOR = "#111111";
const DEAD_COLOR = "#111111";
const ALIVE_COLOR = "#33ff54";
const TICKS_PER_DRAW_TEXT = "Speed: ";
let TICKS_PER_ROUND = 1;

// Construct the universe, and get its width and height.
const universe = Universe.new();
const width = universe.width();
const height = universe.height();

// Give the canvas room for all of our cells and a 1px border
// around each of them.
const canvas = document.getElementById("game-of-life-canvas");
const ctx = canvas.getContext('2d');
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;
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
	ctx.globalAlpha = 1;
	drawGrid();
	drawCells();
	ctx.globalAlpha = 0.5;
});
reset_random.addEventListener('click', () => {
	universe.randomize_cells();
	ctx.globalAlpha = 1;
	drawGrid();
	drawCells();
	ctx.globalAlpha = 0.5;
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

	ctx.beginPath();

	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			const idx = getIndex(row, col);

			ctx.fillStyle = bitIsSet(idx, cells)
				? ALIVE_COLOR
				: DEAD_COLOR;

			ctx.fillRect(
				col * (CELL_SIZE + 1) + 1,
				row * (CELL_SIZE + 1) + 1,
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
	ctx.globalAlpha = 0.5;
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

canvas.addEventListener("click", event => {
	const boundingRect = canvas.getBoundingClientRect();

	const scaleX = canvas.width / boundingRect.width;
	const scaleY = canvas.height / boundingRect.height;

	const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
	const canvasTop = (event.clientY - boundingRect.top) * scaleY;

	const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
	const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

	universe.toggle_cell(row, col);

	drawGrid();
	drawCells();
});

const renderLoop = () => {
	// debugger;
	fps_meter.tickStart();
	universe.ticks(TICKS_PER_ROUND);
	drawGrid();
	drawCells();
	animationId = requestAnimationFrame(renderLoop);
	fps_meter.tick();
};
// Just draw the initial state (and wait for player to click 'play')
drawGrid();
drawCells();
