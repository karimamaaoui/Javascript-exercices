function Factorial(n)
{
    let result=1;
    for (let i=2; i<=n; i++)
    {
        result=result * i;
    }
    return result
}

function recursiveFactorial(n)
{
    if (n === 0)
    {
        return 1
    }

    return n * recursiveFactorial(n-1)
}

console.log(Factorial(0)) //1
console.log(Factorial(3)) //6
console.log(Factorial(5)) //120


console.log(recursiveFactorial(0)) //1
console.log(recursiveFactorial(3)) //6
console.log(recursiveFactorial(5)) //120