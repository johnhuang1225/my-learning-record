/*
 * SYNCHRONOUS CODE
 */

function oddsSync(arr){
  return arr.filter(function (n) { return n % 2 });
}

var number = [1, 2, 3, 4, 5, 6, 7];
var oddNmuns = oddsSync(number);
console.log(oddNmuns);
console.log('This comes after the oddsSync call');

/*
 * SYNCHRONOUS CODE
 */

function odds(arr, callback){

  var error = arr.indexOf(3) > -1 ? new Error('No 3s Allowed') : null;

  var oddNums = arr.filter(function (n) { return n % 2 });

  setTimeout(function(){
    callback(error, oddNums);
  }, 1000)
}

var number = [1, 2, 3, 4, 5, 6, 7];
odds(number, function(error, data){
  if (error) throw error;
  console.log(data);
})

// Come after odds call but will appear first
console.log('This comes after the odds call');
