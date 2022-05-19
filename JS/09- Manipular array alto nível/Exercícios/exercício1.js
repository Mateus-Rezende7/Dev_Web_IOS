const valores = [17, 43, 8, 4, 97, 56, 29]

let filtroValores = valores.filter((valor) =>{
    return valor  <= 18;
})

console.log(filtroValores)

 resultado = valores.forEach((resu)=>{
    if (resu % 2 == 0)
    {console.log(`${resu} é par`)}
    if (resu % 2 != 0)
    {console.log(`${resu} é impar`)}
})
