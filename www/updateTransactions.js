
function updateData()
{
    //assigning variables to zero for the second transActionsTables
    let totalInvest=0;let totalReturn=0;let avgProfit=0;let totalProfit=0;
    //defining variables by their class names
    var tInvest = document.getElementsByClassName("class_1");
    var tReturn = document.getElementsByClassName("class_2");
    var tProfit = document.getElementsByClassName("class_3");
    //looping through the lenght of the data we have
    for (var i =0; i <tInvest.length; i++) 
    {
    //maths calculations
    totalInvest=totalInvest + Number(tInvest[i].innerHTML)
    totalReturn=totalReturn + Number(tReturn[i].innerHTML)
    avgProfit=avgProfit + Number(tProfit[i].innerHTML.replace("%",""))
    totalProfit = totalProfit + Number(tReturn[i].innerHTML)-Number(tInvest[i].innerHTML)
    }
    avgProfit=avgProfit/tProfit.length
    document.getElementById("tInvest").innerHTML=totalInvest.toFixed(2) + "DH"
    document.getElementById("tReturn").innerHTML=totalReturn.toFixed(2) + "DH"
    if(avgProfit - Math.floor(avgProfit) !== 0)
    {
        document.getElementById("avgProfit").innerHTML=avgProfit.toFixed(2)+"%"
    }
    else
    {
    document.getElementById("avgProfit").innerHTML=avgProfit+"%"
    }
    if(avgProfit <0)
    {
        document.getElementById("avgProfit").style.color="red"
    }
    else
    {
        document.getElementById("avgProfit").style.color="green"
    }

    document.getElementById("totalProfit").innerHTML= totalProfit.toFixed(2) + "DH"
    if(totalProfit>0)
    {
        document.getElementById("totalProfit").style.color="green"
    }
    else if(totalProfit<0)
    {
        document.getElementById("totalProfit").style.color="red"
    }
        

}

export default updateData