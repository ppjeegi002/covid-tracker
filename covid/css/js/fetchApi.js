function number_seperate(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}
$(document).ready(function () {
    const totalCases = document.querySelector(".total-cases");
    const deaths = document.querySelector(".total-deaths");
    const recovered = document.querySelector(".recovered");
    var length;
 




    $.get("https://api.covid19india.org/data.json", function (response) {
        console.log(response);
        var response = response;
        length = response.statewise.length;
        totalCases.innerHTML = number_seperate(response.statewise[0].confirmed);
        deaths.innerHTML = number_seperate(response.statewise[0].deaths);
        recovered.innerHTML = number_seperate(response.statewise[0].recovered);
        
        var state1=[]
        var confirmed1=[]
        var deaths1=[]
        var recovered1=[]
    





          $.each(response.statewise,function(id,obj){
       state1.push(obj.state)
        confirmed1.push(obj.confirmed)
      deaths1.push(obj.deaths)
        recovered1.push(obj.recovered)
    })
    
    state1.shift()
    confirmed1.shift()
    recovered1.shift()
    deaths1.shift()
    console.log(state1)
    


    var chart = document.getElementById("chart").getContext('2d')

    var Mchart=new Chart(chart,{
        type:'line',
        data:{
            labels:state1,
            datasets:[
                {
                    label:"Confirmed cases",
                    data:confirmed1,
                    backgroundColor:"orange",
                    borderColor:"orange"
                    
                },  {
                    label:"Recovered  cases",
                    data:recovered1,
                    backgroundColor:"green",
                    borderColor:"green"
                    
                },{
                    label:"Dead cases",
                    data:deaths1,
                    backgroundColor:"red",
                    borderColor:"red"
                    
                }

            ]
        },
        options:{}
    })
    


    });
}, "jsonp");


