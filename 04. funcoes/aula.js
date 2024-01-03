function incrementarJuros(valor, percentJuros){
    const valorAcres = (percentJuros / 100) * valor;
    return valor + valorAcres; 
}

console.log(incrementarJuros (100, 10));
console.log(incrementarJuros (100, 15));
console.log(incrementarJuros (100, 20));