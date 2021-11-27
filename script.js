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
    document.getElementById("num").innerHTML = "0";
    document.getElementById("operand").innerHTML = "";
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
    var previous = document.getElementById("num");
    var operator = document.getElementById("operand");
    if (op.innerHTML != "x^2" && op.innerHTML != "x^3" && op.innerHTML != "log") {
        if (previous.innerHTML == "0") {
            previous.innerHTML = current.innerHTML;
            current.innerHTML = "0";
        }
        else {
            switch (operator.innerHTML) {
                case "*":
                    previous.innerHTML = (previous.innerHTML) * (current.innerHTML);
                    current.innerHTML = "0";
                    break;
                case "+":
                    previous.innerHTML = (previous.innerHTML) + (current.innerHTML);
                    current.innerHTML = "0";
                    break;
                case "-":
                    previous.innerHTML = (previous.innerHTML) - (current.innerHTML);
                    current.innerHTML = "0";
                    break;
                case "/":
                    previous.innerHTML = (previous.innerHTML) / (current.innerHTML);
                    current.innerHTML = "0";
                    break;
                case "^":
                    previous.innerHTML = Math.pow((previous.innerHTML), (current.innerHTML));
                    current.innerHTML = "0";
                    break;
            }
        }
        operator.innerHTML = op.innerHTML;
    }
    else {
        if (previous.innerHTML == "0") {
            switch (op.innerHTML) {
                case "x^2":
                    current.innerHTML = Math.pow(current.innerHTML, 2);
                    previous.innerHTML = "0";
                    break;
                case "x^3":
                    current.innerHTML = Math.pow(current.innerHTML, 3);
                    previous.innerHTML = "0";
                    break;
                case "log":
                    current.innerHTML = Math.log(current.innerHTML);
                    previous.innerHTML = "0";
                    break;
            }
        }
        else {
            switch (operator.innerHTML) {
                case "*":
                    switch (op.innerHTML) {
                        case "x^2":
                            current.innerHTML = previous.innerHTML * Math.pow(current.innerHTML, 2);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "x^3":
                            current.innerHTML = previous.innerHTML * Math.pow(current.innerHTML, 3);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "log":
                            current.innerHTML = previous.innerHTML * Math.log(current.innerHTML);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                    }
                    break;
                case "+":
                    switch (op.innerHTML) {
                        case "x^2":
                            current.innerHTML = previous.innerHTML + Math.pow(current.innerHTML, 2);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "x^3":
                            current.innerHTML = previous.innerHTML + Math.pow(current.innerHTML, 3);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "log":
                            current.innerHTML = previous.innerHTML + Math.log(current.innerHTML);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                    }
                    break;
                case "/":
                    switch (op.innerHTML) {
                        case "x^2":
                            current.innerHTML = previous.innerHTML / Math.pow(current.innerHTML, 2);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "x^3":
                            current.innerHTML = previous.innerHTML / Math.pow(current.innerHTML, 3);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "log":
                            current.innerHTML = previous.innerHTML / Math.log(current.innerHTML);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                    }
                    break;
                case "-":
                    switch (op.innerHTML) {
                        case "x^2":
                            current.innerHTML = previous.innerHTML - Math.pow(current.innerHTML, 2);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "x^3":
                            current.innerHTML = previous.innerHTML - Math.pow(current.innerHTML, 3);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                        case "log":
                            current.innerHTML = previous.innerHTML - Math.log(current.innerHTML);
                            previous.innerHTML = "0";
                            operator.innerHTML = "";
                            break;
                    }
                    break;
            }
        }

    }

}

function eVal() {
    var current = document.getElementById("current-operand");
    var previous = document.getElementById("num");
    var operator = document.getElementById("operand");
    if (operator.innerHTML != "") {
        switch (operator.innerHTML) {
            case "*":
                current.innerHTML = (previous.innerHTML) * (current.innerHTML);
                previous.innerHTML = "0";
                operator.innerHTML = "";
                break;
            case "+":
                current.innerHTML = (previous.innerHTML) + (current.innerHTML);
                previous.innerHTML = "0";
                operator.innerHTML = "";
                break;
            case "-":
                current.innerHTML = (previous.innerHTML) - (current.innerHTML);
                previous.innerHTML = "0";
                operator.innerHTML = "";
                break;
            case "/":
                current.innerHTML = (previous.innerHTML) / (current.innerHTML);
                previous.innerHTML = "0";
                operator.innerHTML = "";
                break;
            case "^":
                current.innerHTML = Math.pow((previous.innerHTML), (current.innerHTML));
                previous.innerHTML = "0";
                operator.innerHTML = "";
                break;
        }
    }
}

function changeStyle() {
    if (document.getElementById("hide")) {
        document.getElementById("calculator-whole").style.gridTemplateRows = "minmax(94px, auto) repeat(6, 80px)";
        document.getElementById("hide").id = "view";
    }
    else {
        document.getElementById("calculator-whole").style.gridTemplateRows = "minmax(94px, auto) repeat(5, 80px)";
        document.getElementById("view").id = "hide";
    }
}
