from stats.plots.input_csv import readFromCSV, INPUT_CSV, INPUT_COLS, K_FOLD_VAL
import numpy as np
import matplotlib.pyplot as plt
# from scipy.misc import imread
# import colorsys


"""
========
Barchart
========

A bar plot with errorbars and height labels on individual bars
"""

colors = ['#800000', '#bf5300', '#edb908', '#4c4c4c', '#009000']
# colors = ['#4f2c1d', '#cba052', '#ffe680', '#fef1b2', '#7cff00']
# colors = ['#6f94d2', '#5b1085', '#abfdfb', '#a72294', '#f07fe0']
# colors = ['#ffa472', '#ff8847', '#e17e7c', '#ce7798', '#a669db']

data = readFromCSV(INPUT_CSV, INPUT_COLS, K_FOLD_VAL)

INPUT_COLS.pop(0)
N = len(INPUT_COLS)

# Overall data
algo_means = np.array(data.mean(axis=0))
algo_std = np.array(data.std(axis=0))

natives = ["Native C++ GCC", "Native C++ VS"]
jss = ["native JS Node"]
asms = ["ASM.js Node", "ASM.js Chrome", "ASM.js Firefox", "ASM.js Edge"]
wasms = ["WASM Node", "WASM Chrome", "WASM Firefox", "WASM Edge"]

native_means = []
native_stds = []
js_means = []
js_stds = []
asmjs_means = []
asmjs_stds = []
wasm_means = []
wasm_stds = []

# Native CPP implementations
for col in INPUT_COLS:
    native_means.append(np.nanmean(np.array(data.loc[data[K_FOLD_VAL].isin(natives)][col])))
    native_stds.append(np.nanstd(np.array(data.loc[data[K_FOLD_VAL].isin(natives)][col])))
    js_means.append(np.nanmean(np.array(data.loc[data[K_FOLD_VAL].isin(jss)][col])))
    js_stds.append(np.nanstd(np.array(data.loc[data[K_FOLD_VAL].isin(jss)][col])))
    asmjs_means.append(np.nanmean(np.array(data.loc[data[K_FOLD_VAL].isin(asms)][col])))
    asmjs_stds.append(np.nanstd(np.array(data.loc[data[K_FOLD_VAL].isin(asms)][col])))
    wasm_means.append(np.nanmean(np.array(data.loc[data[K_FOLD_VAL].isin(wasms)][col])))
    wasm_stds.append(np.nanstd(np.array(data.loc[data[K_FOLD_VAL].isin(wasms)][col])))

# print(native_means)
# print(js_means)
# print(asmjs_means)
# print(wasm_means)

x_range = np.arange(N)  # the x locations for the groups
width = .17       # the width of the bars

fig, ax = plt.subplots()


overall = plt.bar(x_range, algo_means, width, color=colors[0], yerr=algo_std, log=True, label="overall")
native = plt.bar(x_range+width, native_means, width, color=colors[1], yerr=native_stds, log=True, label="native")
jss = plt.bar(x_range+2*width, js_means, width, color=colors[2], yerr=js_stds, log=True, label = "JavaScript")
asms = plt.bar(x_range+3*width, asmjs_means, width, color=colors[3], yerr=asmjs_stds, log=True, label = "ASM.js")
wasms = plt.bar(x_range+4*width, wasm_means, width, color=colors[4], yerr=wasm_stds, log=True, label = "WASM")

ax.set_facecolor((230/256.0, 243/256.0, 247/256.0))
handles, labels = ax.get_legend_handles_labels()
ax.legend(handles, labels)

plt.ylabel('Runtime in ms.')
plt.title('Mean / Std. per runtime environment & algorithm')
plt.xticks(x_range+0.34, INPUT_COLS, rotation=60, ha='right')
plt.axis([-0.25, N, 0, max(algo_means + algo_std)*2])
plt.subplots_adjust(bottom=0.3)


def autolabel(rects):
    """
    Attach a text label above each bar displaying its height
    """
    for rect in rects:
        height = rect.get_height()
        # if height is :
        plt.text(rect.get_x() + rect.get_width()/2., 1.15*height,
                '%d' % int(height),
                ha='center', va='bottom')

# autolabel(overall)
# autolabel(native)
# autolabel(jss)
# autolabel(asms)
# autolabel(wasms)

plt.show()