// Prime Number is a natural number greater than 1 that is not a product 
//of two smaller natural numbers

function PrimeNumber (n){

    if (n < 2) {
        return false
    }
    for (let i=2; i<n; i++)
    {
        if (n % i ===0){
            return false
        }
    }

    return true
}


console.log(PrimeNumber(1)) //false
console.log(PrimeNumber(5)) //true
console.log(PrimeNumber(4)) //false