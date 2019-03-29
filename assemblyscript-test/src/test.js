var myModule = require("../module.js")
console.log( `Test addition: ${myModule.add(1, 2)}` )

const V = 300

/**
 * Graph instantiation performance test
 */
var tic = +new Date
for ( let i = 0; i < 10; ++i ) {
  myModule.instantiateGraph( V )
}
var toc = +new Date
console.log( `Graph instantiation with ${V} nodes took (10-fold mean): ${(toc-tic)/10} ms.`)


/**
 * Floyd Warshal performance test
 */
var tic = +new Date
for ( let i = 0; i < 10; ++i ) {
  var innertic = +new Date
  myModule.FWDense()
  var innertoc = +new Date
  console.log( 'Computed FW Dense, iteration ' + i + ', took time: ' + (innertoc - innertic) + ' ms.' )
}
var toc = +new Date
console.log( `Floyd Warshal on ${V} nodes took (10-fold mean): ${(toc-tic)/10} ms.`)
