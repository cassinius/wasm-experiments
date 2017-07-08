from stats.plots.input_csv import readFromCSV, INPUT_CSV, INPUT_COLS, K_FOLD_VAL
import numpy as np
import matplotlib.pyplot as plt
import math


OUTPUT_DIR = 'output'
FILE_NAME = 'all_subplots_'
FILE_FORMAT = '.png'
COLOR_PALETTE = 1
N = 4

# Color palettes
colors = [
    ['#800000', '#bf5300', '#edb908', '#4c4c4c'],
    ['#4f2c1d', '#cba052', '#ffe680', '#fef1b2'],
    ['#6f94d2', '#5b1085', '#abfdfb', '#a72294'],
    ['#ffa472', '#ff8847', '#e17e7c', '#ce7798']
]

data = readFromCSV(INPUT_CSV, INPUT_COLS, K_FOLD_VAL)

INPUT_COLS.pop(0)

# Overall data
overall_means = np.array(data.mean(axis=0))
overall_stds = np.array(data.std(axis=0))

natives = ["Native C++ GCC"] #, "Native C++ VS"]
jss = ["native JS Node"]
asms = ["ASM.js Node", "ASM.js Chrome", "ASM.js Firefox", "ASM.js Edge"]
wasms = ["WASM Chrome", "WASM Firefox", "WASM Edge"]

native_means = []
native_stds = []
js_means = []
js_stds = []
asmjs_means = []
asmjs_stds = []
wasm_means = []
wasm_stds = []

for col in INPUT_COLS:
    native_means.append(np.mean(np.array(data.loc[data[K_FOLD_VAL].isin(natives)][col])))
    native_stds.append(np.std(np.array(data.loc[data[K_FOLD_VAL].isin(natives)][col])))
    js_means.append(np.mean(np.array(data.loc[data[K_FOLD_VAL].isin(jss)][col])))
    js_stds.append(np.std(np.array(data.loc[data[K_FOLD_VAL].isin(jss)][col])))
    asmjs_means.append(np.mean(np.array(data.loc[data[K_FOLD_VAL].isin(asms)][col])))
    asmjs_stds.append(np.std(np.array(data.loc[data[K_FOLD_VAL].isin(asms)][col])))
    wasm_means.append(np.mean(np.array(data.loc[data[K_FOLD_VAL].isin(wasms)][col])))
    wasm_stds.append(np.std(np.array(data.loc[data[K_FOLD_VAL].isin(wasms)][col])))

print(overall_means)
print(native_means)
print(js_means)
print(asmjs_means)
print(wasm_means)

# We need to put the 10 entries into their respective arrays
bars_means = {}
for idx, col in enumerate(INPUT_COLS):
    bars_means[col] = []
    bars_means[col].append(native_means[idx])
    bars_means[col].append(js_means[idx])
    bars_means[col].append(asmjs_means[idx])
    bars_means[col].append(wasm_means[idx])
bars_stds = {}
for idx, col in enumerate(INPUT_COLS):
    bars_stds[col] = []
    bars_stds[col].append(native_stds[idx])
    bars_stds[col].append(js_stds[idx])
    bars_stds[col].append(asmjs_stds[idx])
    bars_stds[col].append(wasm_stds[idx])

print(bars_means)
print(bars_stds)
                  # runtime environments per algorithm
x_range = np.arange(N)      # the x locations for the groups
bars_width = .8             # the width of the bars

fig, axes = plt.subplots(5, 2, figsize=(11, 12)) # subplot_kw=dict(polar=True)
fig.set_facecolor((230/256.0, 243/256.0, 247/256.0))
fig.suptitle(r'($\mu, \sigma$) per algorithm & execution environment (runtime in ms.)', fontsize=20)
plt.title('Runtime in ms.', fontsize=14)

lines = []

for idx, col in enumerate(INPUT_COLS):
    ax = axes[math.floor(idx/2)%5, idx%2]
    ax.set_title(col)
    lines.append( ax.barh(bottom=x_range, width=np.flipud(bars_means[col]), height=bars_width, color=colors[COLOR_PALETTE], xerr=np.flipud(bars_stds[col])) )
    ax.axis([0, max(bars_means[col] + max(bars_stds[col])) * 1.05, -0.5, N-0.5])
    ax.set_yticks([])


labels = ('C++ (GCC 6.x)', 'Node.js native', 'ASM.js (Node, Chrome, Firefox, Edge)', 'WASM (Node, Chrome, Firefox, Edge)')
leg = plt.figlegend(lines, labels, loc=(0.055, 0.9), ncol=4, labelspacing=2. )
for idx, handle in enumerate(leg.legendHandles):
    handle.set_color(colors[COLOR_PALETTE][N-idx-1])

plt.subplots_adjust(top=0.85, bottom=0.05, left=0.05, right=0.95, hspace=0.65)
# plt.show()
fig.savefig(OUTPUT_DIR + '/' + FILE_NAME + '_' + str(COLOR_PALETTE) + FILE_FORMAT, facecolor=fig.get_facecolor())