const button= document.querySelector("button")
 let resultdiv= document.createElement('div')
    resultdiv.id="result"
     document.getElementById("wrapper").appendChild(resultdiv)
// //eventlistener
 button.addEventListener("click",calculate)

function calculate(){
    let x=0, y=0, o=""
    const input= document.getElementById("input").value

    //Regular expression to match
    const regex = /(\d+)\s*([-+*/])\s*(\d+)/;

    //match the input with regex

    const match=input.match(regex)

    

    if(match){
     const x = parseInt(match[1])
     let o= match[2]
     const y= parseInt(match[3])

        console.log("x:", x);
        console.log("O:", o);
        console.log("y:", y);

      let z
    switch(o){
        case "+":
             z=x+y
             break;
        case '-':
             z=x-y
             break;
        case '*':
             z=x*y
             break;
        case '/':
             z=x/y
             break;
    }
    document.getElementById('result').innerHTML=z   
    }
    


}


// document.getElementById("calculate").addEventListener("click", function() {

// function calculate(){
//      const input = document.getElementById("input").value;
 
     // Regular expression to match the input format
     // const regex = /(\d+)\s*([-+*/])\s*(\d+)/;
 
     // Match the input against the regular expression
//      const match = input.match(regex);
 
//      if (match) {
//          const operand1 = parseInt(match[1]);
//          const operator = match[2];
//          const operand2 = parseInt(match[3]);
 
//          console.log("Operand 1:", operand1);
//          console.log("Operator:", operator);
//          console.log("Operand 2:", operand2);
 
//          let result;
 
//          switch (operator) {
//              case "+":
//                  result = operand1 + operand2;
//                  break;
//              case "-":
//                  result = operand1 - operand2;
//                  break;
//              case "*":
//                  result = operand1 * operand2;
//                  break;
//              case "/":
//                  result = operand1 / operand2;
//                  break;
//              default:
//                  console.log("Invalid operator");
//                  return; // Exit the function if operator is invalid
//          }
//          document.getElementById('result').innerHTML=result 
//      }
         
// }