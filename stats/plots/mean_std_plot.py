from stats.plots.input_csv import readFromCSV, INPUT_CSV, INPUT_COLS, K_FOLD_VAL
import numpy as np
import matplotlib.pyplot as plt
from scipy.misc import imread
import colorsys


"""
========
Barchart
========

A bar plot with errorbars and height labels on individual bars
"""

# Generate color palette
colors = []
for i in range(101):
    rgb = colorsys.hsv_to_rgb(i / 300., 1.0, 1.0)
    colors.append([x for x in rgb])
    # print(i, [round(255*x) for x in rgb])

print(colors)

img = imread("./img/raster.jpg")
# colors = ['orange', 'g', 'r', 'y', 'k', 'cyan']
data = readFromCSV(INPUT_CSV, INPUT_COLS, K_FOLD_VAL)

INPUT_COLS.pop(0)
N = len(INPUT_COLS)
algo_means = np.array(data.mean(axis=0))
algo_std = np.array(data.std(axis=0))



print(INPUT_COLS)
print(algo_means)
print(algo_std)

x_range = np.arange(N)  # the x locations for the groups
width = .73       # the width of the bars

fig, ax = plt.subplots()
overall = plt.bar(x_range, algo_means, width, color='orange', yerr=algo_std, log=True)
# native = plt.bar(x_range, algo_means+width, width, color='orange', yerr=algo_std, log=True)
# bars2 = plt.bar(x_range+2*width, algo_means/2, width, color='lightblue', yerr=algo_std/2, log=True)


ax.set_axis_bgcolor((230/256.0, 243/256.0, 247/256.0))

plt.ylabel('Runtime in ms.')
plt.title('Overall Mean / Std. per algorithm')
plt.xticks(x_range, INPUT_COLS, rotation=60, ha='right')
plt.axis([-0.5, N-0.5, 0, max(algo_means + algo_std)*2])
plt.subplots_adjust(bottom=0.3)


def autolabel(rects):
    """
    Attach a text label above each bar displaying its height
    """
    for rect in rects:
        height = rect.get_height()
        plt.text(rect.get_x() + rect.get_width()/2., 1.15*height,
                '%d' % int(height),
                ha='center', va='bottom')

autolabel(overall)

plt.show()