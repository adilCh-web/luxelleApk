

function totalCredit(){
    let credit = JSON.parse(localStorage.getItem("credits"))
    let total = 0
    for(let i=0;i<credit.length;i++){
        total+=Number(credit[i].amount)
    }

    document.getElementById("totalCredit").textContent = "Total Credit is: " + total
    console.log("total row is already created " + total)
    

}


export default totalCredit