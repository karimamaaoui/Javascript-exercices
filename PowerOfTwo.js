/**
 * give a n> 0 determine if the number is power of 2 or not 
 */
function PowerOfTwo (n){

    if (n < 1){
        return false;
    }
    while( n > 1)
    {
        if (n % 2 !==0)
        {
            return false
        }
        n=n /2
    }
    return true
}


console.log(PowerOfTwo(1)) //true
console.log(PowerOfTwo(2)) //true
console.log(PowerOfTwo(5)) //false