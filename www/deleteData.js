let suppliersTable = document.getElementById("suppliersTable");
let creditsTable = document.getElementById("creditsTable");
let dataTable = document.getElementById("transActionsTables");

function deleteDb()
{
    if (confirm("Est ce que vous voulez effacer vos données")) {
        //delete 
        localStorage.clear()
        localStorage.setItem("transactions",JSON.stringify([]))
        localStorage.setItem("credits",JSON.stringify([]))
        localStorage.setItem("suppliers",JSON.stringify([]))
        dataTable.style.display = "none"
        suppliersTable.style.display = "none"
        creditsTable.style.display = "none"
        console.log("new Started")
      } else {
        //Nothing happened
      }
    
}

export default  deleteDb