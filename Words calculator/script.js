function calculate(){
    let words= document.getElementById("input").value
    let splitwords= words.split(" ")
    let total = splitwords.length
    let result = document.getElementById("result")
    result.innerHTML=total
}