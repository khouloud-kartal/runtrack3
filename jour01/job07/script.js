


const fériés = ['01/01/2020', '04/13/2020', '05/01/2020', '05/08/2020', '05/21/2020', '06/01/2020', '07/14/2020', '08/15/2020', '11/01/2020', '11/11/2020', '12/25/2020']

function jourtravaille(date)
{
    date = new Date(date);
    let weekday = date.toLocaleString('fr', {weekday: 'long'});
    let jour = date.getDate();
    let mois = date.toLocaleString('fr', {month: 'long'});
    let year = date.getFullYear();

    // console.log(weekday);
    // console.log(jour);
    // console.log(mois);
    // console.log(year);



    for (let i = 0 ;i< fériés.length; i++) {
        let dateFer = new Date(fériés[i])

        if (date === dateFer)
        {
            return "le "+weekday+" "+jour+" "+mois+" "+year+" "+"est un jour fériées";
        }else if(weekday == "samedi" || weekday == "dimanche")
        {
            return "Non, "+weekday+" "+jour+" "+mois+" "+year+" "+"est un weekend";
        }else
        {
            return "Oui, "+weekday+" "+jour+" "+mois+" "+year+" "+"est un jour travaillé";
        }

    }
}
console.log(jourtravaille("4/24/2020"));