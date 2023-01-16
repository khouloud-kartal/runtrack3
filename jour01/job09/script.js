
function tri(numbers,order)
{
    if (order == "asc")
    {
        return numbers.sort((a, b) => a - b);
    }else if(order == "desc")
    {
        return numbers.sort((a, b) => b - a)
    }
}

console.log(tri([1,60,8,90], "desc"));