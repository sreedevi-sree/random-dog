function add() {
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    //logic for add two numbers
    let out = Number(num1) + Number(num2);
    document.getElementsByClassName("output")[0].innerText = "Addtion is " + out;
  }
  function sub() {
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    //logic for subtract two numbers
    let out = Number(num1) - Number(num2);
    document.getElementsByClassName("output")[0].innerText =
      "Subtraction is " + out;
  }
  function mul() {
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    //logic multiply two numbers
    let out = Number(num1) * Number(num2);
    document.getElementsByClassName("output")[0].innerText =
      "Multiplication is " + out;
  }
  function div() {
    let num1 = document.getElementById("first").value;
    let num2 = document.getElementById("second").value;
    //logic for divide two numbers
    let out = Number(num1) / Number(num2);
    document.getElementsByClassName("output")[0].innerText =   
   " Division is  " + out;
  }
  