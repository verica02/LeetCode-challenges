var numsSameConsecDiff = function(n, k)
{
    var s = new Set()
    var d = 0
    function f(num)
    {
        if(('' + num).length == n)
        {
            s.add(num)
            return
        }
        d = num % 10
        if( d + k <= 9) 
        {
            f(num * 10 + d + k)
        }
        d = num % 10
        if(d - k >= 0 ) 
        {
            f(num * 10 + d - k)
        }
    }
    for(let i = 1; i < 10; i++) 
    {
        f(i)
    }
    return [...s]
}