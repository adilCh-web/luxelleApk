import loadGraph from "./plotGraphs.js";
import submitting from "./submitData.js";
import showSubNav from "./showSubNav.js";
import {loadData} from "./loadData.js";
import deleteDb from "./deleteData.js";
import loadSuppliers from "./loadSuppliers.js";
import loadCredits from "./loadCredits.js";
import logOut from "./logOut.js";



let password = document.getElementById("password")




function logIn(){
    
    if (password.value.toString() === "071975") {
        document.getElementById("logInComponent").style.display = "none";
        document.getElementById("main").style.animation = "fade_in_show .5s"
        document.getElementById("main").style.display = "block";

        console.log("logedIn")
        startApp()

    } else if(password.value==""){
        document.querySelector(".passwordErr").innerHTML = "You Should Enter a Password";
    }
    else {

        document.querySelector(".passwordErr").innerHTML = "Password Incorrect";
        console.log("errorPassword")
    }
    
    setTimeout(() => {
        document.querySelector(".passwordErr").innerHTML = "";
    }, 2000);

    password.value = "";}




document.getElementById("logIn").addEventListener("click",logIn)


//sessionStorage.setItem("submittingDataType","profitData")
function startApp(){
    sessionStorage.setItem("arrowDown","true")
    let submit = document.getElementById("s")

    sessionStorage.setItem("submittingDataType","profitData")



    if(localStorage.length === 0){
        localStorage.setItem("transactions",JSON.stringify([]))
        localStorage.setItem("credits",JSON.stringify([]))
        localStorage.setItem("suppliers",JSON.stringify([]))
        console.log("new Started")
    }




    loadData()

    submit.addEventListener("click",submitting)



        

    document.getElementById("loadGraph").addEventListener("click",loadGraph)
    document.getElementById("s").addEventListener("click",submitting)

    document.getElementById("loadSubNav").addEventListener("click",showSubNav)
    document.getElementById("loadDataTransactions").addEventListener("click",loadData)

    document.getElementById("deleteData").addEventListener("click",deleteDb)

    document.getElementById("showDataSuppliers").addEventListener("click",loadSuppliers)

    document.getElementById("showDataCredit").addEventListener("click",loadCredits)

    document.getElementById("logOut").addEventListener("click",logOut)

}




