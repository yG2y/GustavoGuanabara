let valores = [8, 1, 7, 4, 2, 9]

// for(pos = 0; pos< valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }
// o código abaixo faz o mesmo que o de cima 
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}