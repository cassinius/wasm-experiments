const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
  }

let sum_time = 0;
const iterations = 1;

for ( let i = 0; i < iterations; ++i ) {
    let tic = +new Date;
    permutator([ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ])
    let toc = +new Date;
    sum_time += toc - tic;
}

console.log(`String permutation over ${iterations} iterations in native JS took ${sum_time / iterations} ms.`);