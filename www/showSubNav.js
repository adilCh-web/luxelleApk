


function showSubNav(){
    let arrowDown =  sessionStorage.getItem("arrowDown") 

    if(arrowDown === "true"){
        document.getElementById("subNav").style.animation = "fade_in_show 1s";
        document.getElementById("subNav").style.visibility="visible";
        document.getElementById("arrow").className="fa fa-caret-up";
        sessionStorage.setItem("arrowDown","false")}
    else{
        document.getElementById("arrow").className="fa fa-caret-down";
        document.getElementById("subNav").style.animation = "fade_out_show 2s";
        setTimeout(() => {
            document.getElementById("subNav").style.visibility="hidden"
        }, 1000);
        sessionStorage.setItem("arrowDown","true")
        
        //document.getElementById("subNav").style.visibility="hidden";

    }
       console.log(arrowDown)
    }



export default showSubNav