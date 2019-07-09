// invoke with 'node --max-old-space-size=8192'

function permut(string) {
    
    if (string.length < 2) {
        return string;
    }

    // This array will hold our permutations
    var permutations = [];

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        // if char was used already
        if (string.indexOf(char) != i) {
            continue;
        }

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

        for (var subPermutation of permut(remainingString)) {
            permutations.push(char + subPermutation)
        }

    }
    return permutations;
}

let sum_time = 0;
const iterations = 10;

for ( let i = 0; i < iterations; ++i ) {
    let tic = +new Date;
    permut("Hello World");
    let toc = +new Date;
    sum_time += toc - tic;
}

console.log(`String permutation over ${iterations} iterations in native JS took ${sum_time / iterations} ms.`);
