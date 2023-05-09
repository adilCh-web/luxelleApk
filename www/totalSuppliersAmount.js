

const totalSuppliersAmount = ()=>{

    let suppliersData = JSON.parse(localStorage.getItem("suppliers"))
    let total=0;
    suppliersData.forEach(element => {
        total+=Number(element.amount)
    })


    let row = document.createElement("tr")
    row.id = "totalSupplierRow"
    row.style.backgroundColor ="#000000";
    row.style.fontSize = "18px";
    let cell = document.createElement("td")
    cell.id = "totalSuppliersCell"

    cell.colSpan = "3";
    row.appendChild(cell)
    document.getElementById("suppliersTable").appendChild(row)
    cell.innerHTML= `Total suppliers Amount is ${total}`

}

export default totalSuppliersAmount
