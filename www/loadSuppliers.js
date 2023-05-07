let suppliersTable = document.getElementById("suppliersTable");
let dataTable = document.getElementById("transActionsTables");
let creditsTable = document.getElementById("creditsTable");
let form = document.querySelector(".form")
let graphs = document.getElementById("canvas")



function loadSuppliers(){
    
    sessionStorage.setItem("submittingDataType","suppliersData")
    sessionStorage.setItem("arrowDown","true") 
    //console.log(sessionStorage.getItem("submittingDataType"))

    document.getElementById("subNav").style.animation = "fade_out_show 2s";
    setTimeout(() => {
        document.getElementById("subNav").style.display="none"
    }, 1000);

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
            let myArray = [suppliers[i].time,suppliers[i].name,suppliers[i].amount];
            let row =document.createElement("tr")
            for(let j=0;j<myArray.length;j++){
                let cell = document.createElement("td")
                cell.textContent = myArray[j]
                row.appendChild(cell)

            }
            suppliersTable.appendChild(row)
        }
            
}


export default loadSuppliers