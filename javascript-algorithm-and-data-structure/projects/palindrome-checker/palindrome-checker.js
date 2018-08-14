//Basic palindrome checker which use the built in built-in array methods
function palindrome(str) {
  //Regex that match with all non-alphanumeric characters
  var re = /[\W_]/g;
  
  //Use replace to remove all the non-alphanumeric characters
  var lowRegStr = str.toLowerCase().replace(re, '');

  //Split the string into array and use the reverse function to reverse
  // all the elements in array and then join then back again in string
  var reverseStr = lowRegStr.split('').reverse().join('')

  return lowRegStr === reverseStr;
}

function palindrome_with_for_loop(str){
	//Regex that match with all non-alphanumeric characters
  var re = /[\W_]/g;
  
  //Use replace to remove all the non-alphanumeric characters
  var lowRegStr = str.toLowerCase().replace(re, '');
  
  var j = 0;
  
  for(var i = lowRegStr.length - 1; i > 0; i-- ){
	  if( lowRegStr[j] !== lowRegStr[i] ){
		  return false;
	  }
	  j++;
  }
  
  return true;
}
