// Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de imprimir el número, se imprimirá Fizz, en los números que sean múltiplos de 5 se imprimirá Buzz, y además en los números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz.
for (let x = 1; x <= 1000; ++x) {
    if (x%3===0) {
        if (x%5===0) console.log("FizzBuzz"); 
        else console.log("Fizz"); 
    } else if (x%5===0) {
        if (x%3===0) console.log("FizzBuzz"); 
        else console.log("Buzz");
    } else {
        console.log(x); 
    }
}
