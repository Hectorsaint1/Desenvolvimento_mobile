let indiceq2: number = 0
let soma_num : number =0
while (indiceq2 <= 20) {
    if (indiceq2 % 2 === 0) {
        soma_num += indiceq2
    }
    indiceq2 += 1
}

    console.log('a soma dos pares é:', soma_num)