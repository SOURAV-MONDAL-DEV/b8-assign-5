


function clickToSelect(name, price) {


    const selection = document.getElementById('selection');
    const cuponInput = document.getElementById('cuponInput');
    const ApplyButton = document.getElementById('ApplyButton');
    const TotalPrice = document.getElementById('TotalPrice');
    const Discount = document.getElementById('Discount');
    const GrandTotal = document.getElementById('GrandTotal');

    console.log(name, price)

    // let name = nameTag.innerText;
    let createEle = document.createElement('li');
    createEle.innerText = name;
    selection.append(createEle);

    TotalPrice.innerText = (parseFloat(TotalPrice.innerText) + parseFloat(price)).toFixed(2);

    if(TotalPrice.innerText >= 200){
        // console.log("besi")
        ApplyButton.disabled = false;
    }


    if(cuponInput.value == "SALL200"){
        console.log("cupon correct")
        Discount.innerText = ((20/100)*parseFloat(TotalPrice.innerText)).toFixed(2);        
    }


    // console.log(parseFloat(TotalPrice.innerText) - parseFloat(Discount.innerText))

    GrandTotal.innerText = (parseFloat(TotalPrice.innerText) - parseFloat(Discount.innerText) ).toFixed(2);


    // btnTag.disabled = true

}

function applyCupon(){
    if(cuponInput.value == "SALL200"){
        console.log("cupon correct")
        Discount.innerText = ((20/100)*parseFloat(TotalPrice.innerText)).toFixed(2);
        GrandTotal.innerText = (parseFloat(TotalPrice.innerText) - parseFloat(Discount.innerText) ).toFixed(2);
        
    }
}


