
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
	const sum;
	
  	numbers += number % 3 || 5;
  	//take out duplicates

  	return sum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue );
}
//  ??????????????????

// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.











////////////////////////////////////

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// a being 1, b being 2, etc.
// As an example:
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

alphabetPosition("at at b.");

function alphabetPosition (text) {
	for (let i = 0; i < text.length; i ++) {

	}
    return parseInt(text.charAt[i], 36) - 9;

}

/////////////////////////////////

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
	var sum = marks.reduce(function(a, b) { return a + b; });
	var avg = sum / marks.length;
  	return Math.floor(avg);
}
// or  //
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

/////////////////////////////////////////////

// All of the animals are having a feast! Each animal is bringing one dish. 
// There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments 
// and returns true or false to indicate whether the beast is allowed to bring the dish 
// to the feast.

// Assume that beast and dish are always lowercase strings, 
// and that each has at least two letters. beast and dish may contain hyphens and spaces, 
// but these will not appear at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
	if (beast.indexOf(0) === dish.indexOf(0) && beast.lastIndexOf(-1) === dish.lastIndexOf(-1)) {
		return true;
	}
}function feast(beast, dish) {
	if (beast.charAt(0) === dish.charAt(0) && beast.charAt(-1) === dish.charAt(-1)) {
		return true;
	}
}



///answer
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

///////////////////////////////////////

// Coding in function splitAndMerge, function accept 2 parameters:str and sp. str is a sentence. 
// sp is a char as separator.
// First we need to divide the sentence into words(Use separator space); 
// and then divide each word into characters(Use separator empty string); 
// and then merge each characters with the specified sp; 
// at last merge all the words(Use separator space) and return it.


function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}

////////////////////////


// Coding in function ```cutIt```, function accept 1 parameter:```arr```. 
// ```arr``` is a string array.
// The first mission: Traversing ```arr```, find the shortest string length.
// The second mission: Traversing ```arr``` again, 
// intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
// for example:
// ```
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]

function cutIt(arr){
  var min = Math.min(...arr.map(({ length }) => length));
  //map over array slice it by min.
    
  
}