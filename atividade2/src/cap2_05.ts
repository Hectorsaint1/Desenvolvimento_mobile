const idade_pessoa:number = 19

if (idade_pessoa <16) {
    console.log('não vota')
}else if((idade_pessoa >= 16 && idade_pessoa < 18) || (idade_pessoa > 70)){
    console.log('voto facultativo')
}else{
    console.log('voto obrigatorio')
}