let form = document.querySelector(".form")
let creditsTable = document.getElementById("creditsTable")
let suppliersTable = document.getElementById("suppliersTable")
let tableData = document.getElementById("transActionsTables")
let graphs = document.getElementById("canvas")

function loadGraph()
 {
    form.style.display = "none";
    creditsTable.style.display = "none"
    //in case the arrow is up
    document.getElementById("arrow").className="fa fa-caret-down";
    console.log("clicked")
    graphs.style.display="block"
    document.getElementById("subNav").style.animation = "fade_out_show 2s";
    setTimeout(() => {
        document.getElementById("subNav").style.visibility="hidden"
    }, 1000);
    
    var values=[];
    var acumProfit=0;
    var acumReturn=0;
    var acumInvest=0
    var labels=[]
    var dataInvest = []
    var dataProfit = []
    tableData.style.display="none"
    suppliersTable.style.display="none"
    graphs.style.display="block"

    let invest = JSON.parse(localStorage.getItem("transactions"))
    for(let i=0;i<invest.length;i++)
        {
        
            acumProfit=acumProfit + (Number(invest[i].return) - Number(invest[i].invest))

            acumInvest= acumInvest + Number(invest[i].invest)
            acumReturn = acumReturn + Number(invest[i].return)

            dataInvest.push(Number(invest[i].invest))
            dataProfit.push(Number(invest[i].return)-Number(invest[i].invest))
            labels.push(invest[i].time)
            if(i==(invest.length-1))
            {
                values.push(acumProfit)
                values.push(acumInvest)
            }

        }

 
    console.log(dataInvest)
    console.log([acumProfit, acumReturn, acumInvest])
    const ctx = document.getElementById('first').getContext('2d');
    const ctx_ = document.getElementById('second').getContext('2d');
    console.log(labels)


    

    new Chart(ctx, {
        type: 'line',

        data: {
            labels:labels,
            
            datasets: [{
                label: 'Profit',
                data: dataProfit,
                borderWidth: 1,
                fill: true,
                backgroundColor: "#aec8e1",
                borderColor: "transparent",
            },
            {
                label: 'Invest',
                data: dataInvest,
                borderWidth: 1,
                fill: true,
                backgroundColor: '#e9ccd1'
            }
            ]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true,
                }
            }]
            }
        }
        });

        var xValues = ["Profit", "Invest"];
        var barColors = [
          "#b99d00",
          "#b96b5c"
        ];
        
        new Chart(ctx_, {
          type: "pie",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              color: "#ffffff",
              data: values
            }]
          },
          options: {
            title: {
              display: true,
              text: "------ Total ------"
            }
          }
        });
        //document.getElementById("load").disabled = false;
        
}


export default loadGraph