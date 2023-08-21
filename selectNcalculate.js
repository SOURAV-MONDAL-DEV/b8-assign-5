console.log("js ok")



function clickToSelect(name, price){
    const selection = document.getElementById('selection');
    


        console.log(name, price)



    
        // let name = nameTag.innerText;
        let createEle = document.createElement('li');
        createEle.innerText = name;
        selection.append(createEle);
        // btnTag.disabled = true
    
}