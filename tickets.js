function tickets(array) {
    var kasir = 0
    var output = ''
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 25) {
            kasir += 25
        } else if (array[i] != 25) {
            array[i] = array[i] - 25
            output = 'YES'
            if (kasir >= array[i]) {
                kasir = kasir - array[i]
            } else {
                output = 'NO'
            }
        }
    }
    return output
}

console.log(tickets([25, 25, 50])) //YES
console.log(tickets([25, 100])) //NO
console.log(tickets([25, 25, 50, 50, 100])) //NO