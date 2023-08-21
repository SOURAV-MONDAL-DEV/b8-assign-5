


function clickToSelect(name, price) {


    const selection = document.getElementById('selection');
    const cuponInput = document.getElementById('cuponInput');
    const ApplyButton = document.getElementById('ApplyButton');
    const TotalPrice = document.getElementById('TotalPrice');
    const Discount = document.getElementById('Discount');
    const GrandTotal = document.getElementById('GrandTotal');
    const PurchaseButton = document.getElementById('PurchaseButton');

    console.log(name, price)

    // let name = nameTag.innerText;
    let createEle = document.createElement('li');
    createEle.innerText = name;
    selection.append(createEle);

    TotalPrice.innerText = (parseFloat(TotalPrice.innerText) + parseFloat(price)).toFixed(2);

    if (TotalPrice.innerText >= 200) {
        // console.log("besi")
        ApplyButton.disabled = false;
    }


    if (cuponInput.value == "SALL200") {
        console.log("cupon correct")
        Discount.innerText = ((20 / 100) * parseFloat(TotalPrice.innerText)).toFixed(2);
    }


    // console.log(parseFloat(TotalPrice.innerText) - parseFloat(Discount.innerText))

    GrandTotal.innerText = (parseFloat(TotalPrice.innerText) - parseFloat(Discount.innerText)).toFixed(2);

    PurchaseButton.disabled = false;

    // btnTag.disabled = true

}

function applyCupon() {
    if (cuponInput.value == "SALL200") {
        console.log("cupon correct")
        Discount.innerText = ((20 / 100) * parseFloat(TotalPrice.innerText)).toFixed(2);
        GrandTotal.innerText = (parseFloat(TotalPrice.innerText) - parseFloat(Discount.innerText)).toFixed(2);

    }
}

function showCongrats() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "flex ";
}


const reloadButton = document.getElementById("reloadButton");

// Add a click event listener to the button
reloadButton.addEventListener("click", function () {
    // Use the location.reload() method to reload the page
    location.reload();
});

