// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let numString = num.toString()
    if (+numString.split('').slice(1).join('') === 0) {
      return numString
    }
    if (numString.length > 1) {
      let numArray = new Array(numString.length+1).join('0').split('').map(parseFloat)
      
      numArray[0] = +numString.charAt(0)
      bigNum = numArray.join('')
      bigNumString = bigNum.toString()
      return bigNumString + ' + ' + expandedForm(num - bigNum);
    } else if (num === 0) {
      return bigNumString
    } 
    
  }