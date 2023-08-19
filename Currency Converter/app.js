
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))

function displayDropDown(res){
    console.log(Object.entries)
}