


function clickToSelect(name, price) {


    const selection = document.getElementById('selection');
    const TotalPrice = document.getElementById('TotalPrice');
    const Discount = document.getElementById('Discount');
    const GrandTotal = document.getElementById('GrandTotal');

    console.log(name, price)

    // let name = nameTag.innerText;
    let createEle = document.createElement('li');
    createEle.innerText = name;
    selection.append(createEle);

    TotalPrice.innerText = (parseFloat(TotalPrice.innerText) + parseFloat(price)).toFixed(2);

    // console.log((parseFloat(TotalPrice.innerText) + parseFloat(price)).toFixed(2))

    // btnTag.disabled = true

}