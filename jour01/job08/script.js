


function sommenombrespremiers(nbr1, nbr2)
{
    let num1 = true;
    let num2 = true;

    for (let i = 2; i < nbr1; i++)
    {
        if(nbr1%i == 0 )
        {
            num1=false;
            return num1;
        }
    }

    for (let i = 2; i < nbr2; i++)
    {
        if(nbr2%i == 0 )
        {
            num2=false;
            return num2;
        }
    }

    if (num1 == true && num2 == true){
        somm= nbr1+nbr2;
        return somm;
    }
    

}
console.log(sommenombrespremiers(4, 3));