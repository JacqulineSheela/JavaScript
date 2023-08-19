const button= document.querySelector("button")
let resultdiv= document.createElement('div')
    resultdiv.id="result"
    document.getElementById("wrapper").appendChild(resultdiv)
//eventlistener
button.addEventListener("click",displaystats)

function displaystats(){
    const input= document.getElementById("input")
    const city= input.options[input.selectedIndex].value
    let population =0, literacyRate=0, language=""

    switch(city){
        case 'Banglore':
             population= 8443675
             literacyRate= 88.71
             language ='Kannada'
             break;
        case 'Chennai':
             population= 4646732
             literacyRate= 90.20
             language ='Tamil'
             break;
        case 'Mumbai':
             population= 12442372
             literacyRate= 89.73
             language ='Marathi'
             break;
        case 'Delhi':
             population= 16787941
             literacyRate= 86.20
             language ='Hindi'
             break;
    }
    
    let text=`The Indian city of ${city} has a population of ${population} ,literacyRate as ${literacyRate}  and  the language spoken is ${language}`
    
    document.getElementById('result').innerHTML=text



    

}