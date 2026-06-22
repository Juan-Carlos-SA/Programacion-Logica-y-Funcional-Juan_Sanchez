//generar numeros primos con funcion imperativa
const primonumero = num => {
    if (num<2) return false;
    for(let i = 2; i<=Math.sqrt(num);i++){
    if(num%i==0) return false
    }
    return true
}

function* generarprimos(){
    let eval=2
    while(true){
        if(primonumero(eval)){
            yield eval 
        }
        eval++;
    }
}

const numerosprimos = generarprimos()
console.log("Primo 1: ",numerosprimos.next().value);
console.log("Primo 2: ",numerosprimos.next().value);
console.log("Primo 3: ",numerosprimos.next().value);
console.log("Primo 4: ",numerosprimos.next().value);
console.log("Primo 5: ",numerosprimos.next().value);
console.log("Primo 6: ",numerosprimos.next().value);
console.log("Primo 7: ",numerosprimos.next().value);
console.log("Primo 8: ",numerosprimos.next().value);
console.log("Primo 9: ",numerosprimos.next().value);
console.log("Primo 10: ",numerosprimos.next().value);
console.log("Primo 11: ",numerosprimos.next().value);
console.log("Primo 12: ",numerosprimos.next().value);
console.log("Primo 13: ",numerosprimos.next().value);
console.log("Primo 14: ",numerosprimos.next().value);
console.log("Primo 15: ",numerosprimos.next().value);


