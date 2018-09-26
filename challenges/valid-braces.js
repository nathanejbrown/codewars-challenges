// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    let matches = {
      '(': ')',
      '{': '}',
      '[': ']'
    }
    let openingTags = []
    for ( let x = 0; x < braces.length; x++ ) {
      let currentChar = braces.charAt(x)
      if (matches[currentChar]) {
        openingTags.push(currentChar)
      } else {
        let lastOpeningTag = openingTags.pop()
        if (matches[lastOpeningTag] !== currentChar) {
          return false;
        }
      }
    }
    return openingTags.length === 0;
  }