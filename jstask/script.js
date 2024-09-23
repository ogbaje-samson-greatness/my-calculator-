//CALCULATOR PROGRAM

const  display = document.getElementById("display"); 

function appendToDisplay(input){
    document.getElementById("display").innerHTML += input;
  
   // display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
   let cal =  document.getElementById("display");
   let a = cal.split("+");
   let result = parseInt(a[0]) + parseInt(a[1]);
   cal.innerHTML = result;
    //cal.innerHTML = eval(cal.value);
}
/*catch(error){
    display.value ="Error";  
}*/
