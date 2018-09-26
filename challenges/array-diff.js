// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
    let x = 0;
    while ( x < a.length) {
        if (b.indexOf(a[x]) > -1) {
            a.splice(x, 1)
        } else {
            x++
        }
    }
    return a
}