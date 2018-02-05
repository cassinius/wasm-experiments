import pandas as pd
import numpy as np

INPUT_CSV = "../Performance_paper_sheet_20180203.csv"
INPUT_COLS = [
    "ALL-10-FOLD-AVG",
    "FillArrayRand 1e6",
    "RecFib40",
    "IntCompare 1e7",
    "Floyd-Warshall 1k",
    "Permutations",
    "FFT 100k",
    "Huffman 100k",
    "MinCut graph-50",
    "MinCut graph-100",
    "MinCut graph-150"
]
K_FOLD_VAL = "ALL-10-FOLD-AVG"



def readFromCSV(input_file, input_cols, k_fold_val):
    data = pd.read_csv(
        input_file,
        names=input_cols,
        header=0,
        # index_col=0,
        sep=r'\s*,\s*',
        engine='python',
        na_values="?")
    
    for col in data.columns.difference([k_fold_val]):
        data[col] = pd.to_numeric(data[col], errors='coerce')

    # print(data)
    return data



if __name__ == "__main__":
    data = readFromCSV(INPUT_CSV, INPUT_COLS, K_FOLD_VAL)
    # print(data.mean(axis=0))
    # print(data.std(axis=0))

    INPUT_COLS.pop(0)
    for col in INPUT_COLS:
        print(col)
        print(data.loc[data[K_FOLD_VAL].isin(["Native C++ GCC", "Native C++ VS"])][col])

