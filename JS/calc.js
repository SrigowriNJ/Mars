function add(e){
    e.preventDefault();
    var fNum=Number(document.getElementById("FirstNumber").value)
    var sNum=Number(document.getElementById("SecondNumber").value)
    document.getElementById("Result").innerHTML= fNum + sNum;
}

function subtract(e){
    e.preventDefault();
    var fNum=Number(document.getElementById("FirstNumber").value)
    var sNum=Number(document.getElementById("SecondNumber").value)
    document.getElementById("Result").innerHTML= fNum - sNum;
}

function multiply(e){
    e.preventDefault();
    var fNum=Number(document.getElementById("FirstNumber").value)
    var sNum=Number(document.getElementById("SecondNumber").value)
    document.getElementById("Result").innerHTML= fNum * sNum;
}

function divide(e){
    e.preventDefault();
    var fNum=Number(document.getElementById("FirstNumber").value)
    var sNum=Number(document.getElementById("SecondNumber").value)
    document.getElementById("Result").innerHTML= fNum / sNum;
}


