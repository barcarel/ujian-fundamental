function population(p, percent, imigran, targetPopulasi){
    var counter = 0
    penduduk = 0

    while(p < targetPopulasi){
        p = p + (p*(percent/100)) + imigran

        counter++
    }
    return counter
}

console.log(population(1000, 2, 50, 1200))