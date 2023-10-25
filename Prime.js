let n = 23;

if(isPrime(n)){ 
    console.log('Yes It is a Prime Number');
}else{
    console.log(n+ 'is not a Prime Number');
}

function isPrime(n){
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}