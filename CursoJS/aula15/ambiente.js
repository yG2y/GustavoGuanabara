let num = [5, 8, 2, 9, 3]
console.log(num)

num.push(1)
console.log(num)

num.sort()
console.log(num)

console.log(`O vetor tem ${num.length} posições`)
console.log(`nosso vetor é o ${num[0]}`)

let pos = num.indexOf(4) 
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}