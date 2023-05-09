import totalSuppliersAmount from "./totalSuppliersAmount.js";
let suppliersTable = document.getElementById("suppliersTable");
let dataTable = document.getElementById("transActionsTables");
let creditsTable = document.getElementById("creditsTable");
let form = document.querySelector(".form")
let graphs = document.getElementById("canvas")



function loadSuppliers(){
    //define variable total
    let total=0
    //changing the value in the session storage when we click to the supplier
    sessionStorage.setItem("submittingDataType","suppliersData")
    // changing the value in the session stotrage fot the arrowDown
    sessionStorage.setItem("arrowDown","true") 

    // changin the display of the subNav to none after clicking on its hyperlink
    document.getElementById("subNav").style.animation = "fade_out_show 2s";
    setTimeout(() => {
        document.getElementById("subNav").style.visibility="hidden"
    }, 1000);
    //changinmg the i class of the arrow to down
    document.getElementById("arrow").className="fa fa-caret-down";
    suppliersTable.style.display="block";

    //deleting all the suppliers data leaving the heading
    suppliersTable.innerHTML =
     `<tr>
        <th>Date</th>
        <th>Nom</th>
        <th>Montant</th>
    </tr>`

    //hiding the other elements
    graphs.style.display="none"
    creditsTable.style.display = "none"
    dataTable.style.display = "none"
    form.style.display = "block"

    //changing the labels for the inputs
    document.querySelectorAll("label")[0].innerHTML = '<input type="string" id="invest" required> Nom';
    document.querySelectorAll("label")[1].innerHTML = '<input type="number" id="return" required> Montant';
    form.style.display = "block"

    document.getElementById("info").style.visibility = "hidden"
    graphs.style.display="none";
    //displaying all the suppliers data
    let suppliers = JSON.parse(localStorage.getItem("suppliers"))
  
 
        for(let i=0;i<suppliers.length;i++){
            total+= Number(suppliers[i].amount)
            let myArray = [suppliers[i].time,suppliers[i].name,suppliers[i].amount];
            let row =document.createElement("tr")
            for(let j=0;j<myArray.length;j++){
                let cell = document.createElement("td")
                cell.textContent = myArray[j]
                row.appendChild(cell)

            }
            suppliersTable.appendChild(row)
        }

    totalSuppliersAmount()
}


export default loadSuppliers