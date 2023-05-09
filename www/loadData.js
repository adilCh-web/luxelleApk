import updateData from "./updateTransactions.js"

let form = document.querySelector(".form")
let dataTable = document.getElementById("data")
let insightTable = document.getElementById("insight")
let suppliersTable = document.getElementById("suppliersTable")
let creditsTable = document.getElementById("creditsTable")
let graphs = document.getElementById("canvas")


function loadData()
{
    document.getElementById("arrow").className = "fa fa-caret-down"
    sessionStorage.setItem("submittingDataType","profitData")
    sessionStorage.setItem("arrowDown","true") 

    suppliersTable.style.display = "none";
    creditsTable.style.display = "none";
    form.style.display = "block"
    document.querySelectorAll("label")[0].innerHTML = '<input type="number" id="invest" required> Investissement'
    document.querySelectorAll("label")[1].innerHTML = '<input type="number" id="return" required> Revenue'


    document.getElementById("subNav").style.animation = "fade_out_show 2s";
    setTimeout(() => {
        document.getElementById("subNav").style.visibility="hidden"
    }, 1000);

    document.getElementById("transActionsTables").style.display="block"
    dataTable.innerHTML = ""
    console.log("loaded")
    insightTable.style.margin = "auto auto";
    dataTable.style.margin = "auto auto";


    graphs.style.display="none"
   



    let transactions = JSON.parse(localStorage.getItem("transactions"))

    for(let i=0;i<transactions.length;i++)
        {
            console.log("hello ",transactions[i])

            let letmyArray = [transactions[i].time,
            transactions[i].invest,
            transactions[i].return,
            transactions[i].profitPercentage+"%"]
            var row= document.createElement("tr")
            dataTable.appendChild(row)
            for(let i =0;i<4;i++)
            {
                let td=document.createElement("td")
                td.textContent=letmyArray[i]
                td.className = "class_"+i
                row.appendChild(td)
            }

        } 


    setTimeout(() => {updateData()
        
    }, 1000);  
//document.getElementById("load").disabled = true
}




export  {loadData}