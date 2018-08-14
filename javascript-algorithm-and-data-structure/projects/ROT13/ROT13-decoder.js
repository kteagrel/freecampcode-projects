function rot13(str) { // LBH QVQ VG!
    var re = /[\W_]/g;
    var result = []
    for(var i=0; i < str.length; i++){
  
      //Check whether the character is alphanumeric characters
      if(!re.test(str[i])){
        //Get the ASCII code
        var code = str[i].charCodeAt();
        
        //Decode the encoded code
        // -65 to normalize to range of 0 to X instead of 65
        // + 13 % 26 sames as to -13 as 13 * 2 = 26, hence can use this method
        // + 65 denormalize to starting from 65
        var decode = ( code - 65 + 13 ) % 26 + 65;
  
        result.push(String.fromCharCode(decode));
      } 
      else{
        //Push the non-alphanumeric characters 
        result.push(str[i])
      }
    }
  
    return result.join('');
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");