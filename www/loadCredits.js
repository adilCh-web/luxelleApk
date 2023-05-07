import totalCredit from "./totalCredit.js";
let suppliersTable = document.getElementById("suppliersTable");
let creditsTable = document.getElementById("creditsTable");
let dataTable = document.getElementById("transActionsTables");
let form = document.querySelector(".form")
let graphs = document.getElementById("canvas")




function loadCredits(){

    sessionStorage.setItem("submittingDataType","creditsData")
    sessionStorage.setItem("arrowDown","true") 
    //console.log(sessionStorage.getItem("submittingDataType"))
    dataTable.style.display="none"

    document.getElementById("subNav").style.animation = "fade_out_show 2s";
    setTimeout(() => {
        document.getElementById("subNav").style.display="none"
    }, 1000);

    document.getElementById("arrow").className="fa fa-caret-down";
    creditsTable.style.display="block";

    //deleting all the suppliers data leaving the heading
    creditsTable.innerHTML =
     `<tr>
        <th>Date</th>
        <th>Nom</th>
        <th>Montant</th>
    </tr>
    <tr>
        <td colspan ="3" id = "totalCredit"></td>
    </tr>
   `
    //hiding the other elements
    graphs.style.display="none";
    suppliersTable.style.display="none"
    form.style.display = "block"
    //changing the labels for the inputs
    document.querySelectorAll("label")[0].innerHTML = '<input type="string" id="invest" required> Nom';
    document.querySelectorAll("label")[1].innerHTML = '<input type="number" id="return" required> Montant';

    document.getElementById("info").style.visibility = "hidden"
    graphs.style.display="none";

    let credits = JSON.parse(localStorage.getItem("credits"))
    //displaying all the suppliers data

    for(let i=0;i<credits.length;i++){
        let myArray = [credits[i].time,credits[i].name,credits[i].amount];

        let mainRow = document.createElement("tr")
        //let emptyCell = document.createElement("tr")
        let submitRow = document.createElement("tr")
        submitRow.style.display="none"
        submitRow.className = "submitRow"
        let rowData =document.createElement("tr")
        rowData.className = "creditRowData"
        for(let j=0;j<myArray.length;j++){
            let cell = document.createElement("td")
            cell.textContent = myArray[j]
            rowData.appendChild(cell)
            if(j==2){
                cell.className="amountCredit"
            }

        }
        let cellInput = document.createElement("td")
        let payInput = document.createElement("input")
        payInput.type = "number"
        cellInput.appendChild(payInput)
        cellInput.className = "cellInput"
        let cellBtn = document.createElement("td")
        let btn = document.createElement("button")
        btn.className = "unset"
        payInput.className = "unset"
        btn.textContent = "Pay";
        cellBtn.appendChild(btn)
        
        submitRow.appendChild(cellInput)
        //submitRow.appendChild(emptyCell)
        submitRow.appendChild(cellBtn)
        mainRow.appendChild(rowData)
        mainRow.appendChild(submitRow)
        mainRow.className ="flexColumn"
        creditsTable.appendChild(mainRow)

        //showin and unshowing the submit button and input when click

        
        rowData.addEventListener("click",()=>{
        console.log(i);
        if(submitRow.style.display == "block"){
    
            document.querySelectorAll(".submitRow")[i].style.animation = "fade_out_show 2s"
            setTimeout(() => {
                document.querySelectorAll(".submitRow")[i].style.display = "none";
            }, 1000);
        }
        else{
            
            submitRow.style.display="block"
            submitRow.style.animation = "fade_in_show 2s"
        }
        })
        btn.addEventListener("click",()=>{
            console.log(i)
            let amount = Number(document.querySelectorAll(".amountCredit")[i].textContent);
            let valueToSubstract = payInput.value;
            console.log(amount-valueToSubstract)
            if(amount>valueToSubstract){
                document.querySelectorAll(".amountCredit")[i].innerHTML = amount- valueToSubstract
                //storing the new value in the dataBase
                let credits = JSON.parse(localStorage.getItem("credits"))
                credits[i].amount = amount- valueToSubstract
                localStorage.setItem("credits",JSON.stringify(credits))

                // inputs value blank again
                payInput.value= ""
                totalCredit()
                document.querySelectorAll(".submitRow")[i].style.animation = "fade_out_show 2s"
                setTimeout(() => {
                    document.querySelectorAll(".submitRow")[i].style.display = "none";

                }, 1500);

             

            }
            else if(amount<valueToSubstract){
                document.getElementById("info").innerHTML = "The Amount is bigger then the Credit"
                document.getElementById("info").style.visibility = "visible"
                payInput.value= ""
                setTimeout(() => {
                    document.getElementById("info").style.visibility = "hidden"
                    document.getElementById("info").innerHTML="Some of the Data are messing !!"
                }, 2000);
            }
            //once All payed
            else{
                let credits = JSON.parse(localStorage.getItem("credits"))
                mainRow.style.textAlign = "center"
                mainRow.style.padding = "10px"
                mainRow.innerHTML = `${credits[i].name} a tout paye`
                
            
                setTimeout(() => {
                    mainRow.style.display = "none"
                    mainRow.remove()
                    //to re-index the credits that we looped through after deleting a credit
                    loadCredits()
                }, 3000);

                credits.splice(i, 1)
                localStorage.setItem("credits",JSON.stringify(credits))

                //updating the total after substraction the remaining amount
                totalCredit()
            }



        })      
    }
    //adding the last row for the total Credit
    totalCredit()
            
}


export default loadCredits