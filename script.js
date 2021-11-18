function showNum(number) {
    var current = document.getElementById("current-operand");
    if (current.innerHTML == "0") {
        if (number.innerHTML != ".")
            current.innerHTML = number.innerHTML;
        else
            current.innerHTML += number.innerHTML;
    }
    else {
        if (current.innerHTML.includes(".")) {
            if (number.innerHTML != ".")
                current.innerHTML += number.innerHTML;
        }
        else
            current.innerHTML += number.innerHTML;
    }
}

function delNumWhole() {
    document.getElementById("current-operand").innerHTML = "0";
    document.getElementById("previous-operand").innerHTML = "0";
    document.getElementById("operand").innerHTML = "...";
}

function delNum() {
    var current = document.getElementById("current-operand");
    if (current.innerHTML.length > 1)
        current.innerHTML = current.innerHTML.slice(0, -1);
    else
        current.innerHTML = "0";
}

function operationNum(op) {
    var current = document.getElementById("current-operand");
    var previous = document.getElementById("previous-operand");
    var operator = document.getElementById("operand");

    if (previous.innerHTML == "0") {
        previous.innerHTML = current.innerHTML;
        current.innerHTML = "0";
    }
    else {
        switch (operator.innerHTML) {
            case "*":
                previous.innerHTML = Number(previous.innerHTML) * Number(current.innerHTML);
                current.innerHTML = "0";
                break;
            case "+":
                previous.innerHTML = Number(previous.innerHTML) + Number(current.innerHTML);
                current.innerHTML = "0";
                break;
            case "-":
                previous.innerHTML = Number(previous.innerHTML) - Number(current.innerHTML);
                current.innerHTML = "0";
                break;
            case "/":
                previous.innerHTML = Number(previous.innerHTML) / Number(current.innerHTML);
                current.innerHTML = "0";
                break;
        }
    }
    operator.innerHTML = op.innerHTML;

}

function eVal() {
    var current = document.getElementById("current-operand");
    var previous = document.getElementById("previous-operand");
    var operator = document.getElementById("operand");
    if (operator.innerHTML != "...") {
        switch (operator.innerHTML) {
            case "*":
                current.innerHTML = Number(previous.innerHTML) * Number(current.innerHTML);
                previous.innerHTML = "0";
                break;
            case "+":
                current.innerHTML = Number(previous.innerHTML) + Number(current.innerHTML);
                previous.innerHTML = "0";
                break;
            case "-":
                current.innerHTML = Number(previous.innerHTML) - Number(current.innerHTML);
                previous.innerHTML = "0";
                break;
            case "/":
                current.innerHTML = Number(previous.innerHTML) / Number(current.innerHTML);
                previous.innerHTML = "0";
                break;
        }
    }
}