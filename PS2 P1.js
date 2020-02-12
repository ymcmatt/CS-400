function* fibs () 
{     let [val1, val2, result] = [0, 1, 0] 
    yield 0
    while (true) {         
        result = val1+val2         
        val1 = val2         
        val2 = result         
        yield result     
    } 
} 

function* fibGen()
{
for (fib of fibs())
{
    if (fib % 2 == 0)
    {
        yield fib;
    }
}
}

myFibs = fibGen();
let count = 6;
while (count-- > 0){
    console.log(myFibs.next().value)
}
