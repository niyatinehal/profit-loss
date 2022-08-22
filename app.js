var initialPrice=document.querySelector("#initial-price");
var stockQuantity=document.querySelector("#stocks-bought");
var currentPrice=document.querySelector("#current-price");
var resultBtn=document.querySelector("#calculate-btn");
var result= document.querySelector("#output");

function calculateProfitOrLoss(){

    var initial=Number(initialPrice.value);
    var stock=Number(stockQuantity.value);
    var  current=Number(currentPrice.value);
    if(initial && stock && current)
    {
        if (initial<0 || stock<0|| current<0)
    {
        result.style.color="red";
        result.innerText="Please enter a valid input";
    }
    else{
                if(initial>current)
            {
                var loss=(initial-current)*stock;
                var lossPercentage= (loss/initial)*100;
                result.style.color="red";
                result.innerText=(`Oh no! You will have to bear the loss of ${loss} and your loss percentage is ${lossPercentage}%`);

            }else if(initial<current)
            {
                var profit= (current-initial)*stock;
                var profitPercentage=(profit/initial)*100;
                result.style.color="green";
                result.innerText=(`yay! you made a profit of ${profit} and your profit percentage is ${profitPercentage}%`);
            }
            else{
                result.style.color="red";
                result.innerText=("hey!! no loss no gain.");
            }
        }
    }
    else{
        result.innerText=("enter a valid input.")
    }
        
    
}
    // }
    

resultBtn.addEventListener("click",calculateProfitOrLoss);
