# wasm-experiments
Testing performance of native c compiled code vs pure JavaScript (Mozilla, Chrome) and their ASM / WASM versions repectively

> Quote

## Results

* Floyd-Warshall O(n^3) iterations are about twice as fast as JS
* Instantiating, passing & retrieving graph of |V|=1e3 (Array of length 1e6) takes 130ms alone
  - which is MUCH slower than an O(n^2) iteration (=Pagerank) in JS...

## DONE

* Loading WASM via fetch / fetch npm in Node.js
* Uniformly instantiating with instantiateStreaming from 'assemblyscript/lib/loader'
* Merging the ASUtil Interface with an external API mirroring the exported WASM functions in TS
* Passing numbers, strings, arrays of different size & also retrieving them

## TO-DO

* Figure out how to efficiently access the memory via load\<type> & store\<type> within Wasm (this screwed up performance before...)
