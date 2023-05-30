function parimpar(n) {
    if (n%2==0) {
        return `Par!`
    } else {
        return `Impar!`
    }
}

let tipo = parimpar(11)
console.log(tipo)