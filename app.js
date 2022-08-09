var initialPrice=document.querySelector("#initial-price");
var stockQuantity=document.querySelector("#stocks-bought");
var currentPrice=document.querySelector("#current-price");
var resultBtn=document.querySelector("#calculate-btn");
var result= document.querySelector("#output");

function calculateProfitOrLoss(){

    var initial=Number(initialPrice.value);
    var stock=Number(stockQuantity.value);
    var  current=Number(currentPrice.value);
    if(initial>current)
    {
        var loss=(initial-current)*stock;
        var lossPercentage= (loss/initial)*100;
        result.innerText=(`Oh no! You will have to bear the loss of ${loss} and your loss percentage is ${lossPercentage}%`);

    }else if(initial<current)
    {
        var profit= (current-initial)*stock;
        var profitPercentage=(profit/initial)*100;
        result.innerText=(`yay! you made a profit of ${profit} and your profit percentage is ${profitPercentage}%`);
    }
    else{
        result.innerText=("hey!! no loss no gain. ")
    }
}

resultBtn.addEventListener("click",calculateProfitOrLoss);
