// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function(triplets) {
    var uniqueLetters = []
    triplets.forEach((triplet) => {
      for (let x = 0; x < triplet.length; x++) {
        if (uniqueLetters.indexOf(triplet[x]) === -1) {
          uniqueLetters.push(triplet[x])
        }
      }
    })
    function sortLetters (a, b) {
      let weightedA = 0;
      let weightedB = 0;
      triplets.forEach((triplet) => {
        if (triplet.indexOf(a) > -1 && triplet.indexOf(b) > -1) {
          if (triplet.indexOf(a) < triplet.indexOf(b)) {
            weightedA = -1 
            weightedB = 1
          } else {
            weightedB = -1
            weightedA = 1
          }
        }
      })
      return weightedA < weightedB ? -1 : 1
    }
    return uniqueLetters.sort(sortLetters).join('')
  }