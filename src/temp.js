// var input = parseFloat(Math.pow(2,1000).toFixed())
//
// var eachNumber = input.toString().split("")
//
// console.log("input", input)
// eachNumber.forEach(function(element) {
//   console.log("element", element)
// })


var doMath = (base, exponent) => {
  var result = 1;
  var doRecursive = (previous, total) => {
    for (var i = 0; i < exponent; i++)
      result = result * base;
      var total = total + (result + result)
    doRecursive()
  }
  return console.log(result);
}

doMath(2, 5)
