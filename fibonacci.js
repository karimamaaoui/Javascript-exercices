function Fibonacci(n)
{
    const fib =[0,1];
    for (let i=2; i<n; i++)
    {
        fib[i]=fib[i-1] +fib [i-2];

    }
    return fib
}


function recursiveFibonacci(n)
{
    if (n < 2)
    {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}



console.log(Fibonacci(2)) //[0,1]
console.log(Fibonacci(3)) //[0,1,1]
console.log(Fibonacci(7)) //[0,1,1,2,3,5,8]


console.log(recursiveFibonacci(2)) //0
console.log(recursiveFibonacci(3)) //1
console.log(recursiveFibonacci(6)) //8