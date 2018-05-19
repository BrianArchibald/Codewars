
// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, 
//phone number or answer to your most secret question is still correct. 
//However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}

or

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);   //For example, slice(1,4) extracts the second 
  //  element through the fourth element (elements indexed 1, 2, and 3).    /./g === anything

  //////////////////////////////

//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
total = 0;
  for (i = 0; i < arr.length; i++) {
  if(arr[i] > 0) {
  total += arr[i];
}
}
return total;
}

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

/////////////////////////////

// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}


// In this kata you will create a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
	const numbers = [];
  	numbers = number % 3 || 5;
  	return sum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );
}
//  ??????????????????