import pandas as pd
import numpy as np

INPUT_CSV = "../Performance_paper_sheet.csv"
INPUT_COLS = [
    "ALL-10-FOLD-AVG",
    "FillArrayRand 1e6",
    "RecFib40",
    "IntCompare 1e8",
    "Floyd-Warshall 1k",
    "Permutations",
    "FFT",
    "Hufmann 100k",
    "MinCut graph-50",
    "MinCut graph-100",
    "MinCut graph-150"
]
ALGO_COL = "ALL-10-FOLD-AVG"



def readFromCSV(input_file, input_cols):
    original_data = pd.read_csv(
        input_file,
        names=input_cols,
        header=0,
        # index_col=0,
        sep=r'\s*,\s*',
        engine='python',
        na_values="?")
    
    for col in original_data.columns.difference([ALGO_COL]):
        original_data[col] = pd.to_numeric(original_data[col], errors='coerce')
    
    return original_data



if __name__ == "__main__":
    data = readFromCSV(INPUT_CSV, INPUT_COLS)
    # print(data)

    algos = np.array(data[ALGO_COL])
    values = np.array(data[data.columns.difference([ALGO_COL])])

    # print(algos)
    # print(values)

    # data_na = data.dropna(how='any')
    # print(data_na)

    for idx, col in enumerate(values):
        print(algos[idx] + ":")
        print("Mean: %s" % (np.mean(col)))
        print("Std: %s" % (np.std(col)))
        print("\n")


    mean_of_cols = data.mean(axis=0)
    print(mean_of_cols)
