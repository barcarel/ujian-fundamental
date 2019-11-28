function segitigaGanjilTambah(n) {
    var ganjil = 1
    var array = []
    for (var i = 0; i < n; i++) {
        var hasil = 0

        for (var k = 0; k <= i; k++) {
            hasil += ganjil
            ganjil = ganjil + 2
        }
        array[i] = hasil
    }
    return array[n - 1]
}

console.log(segitigaGanjilTambah(2))