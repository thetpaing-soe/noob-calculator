let operations = []
let result = ""
document.querySelector("#result").textContent = "0"
document.querySelector("#ac").onclick = _ => {
    operations = []
    result = ""
    document.querySelector("#result").textContent = "0"
    document.querySelector("#recent").textContent = ""
}
document.querySelector("#del").onclick = _ => {
    if (result.length === 0) {
        operations.pop()
        if (operations.length === 0) {
            document.querySelector("#result").textContent = "0"
        }
        else {
            document.querySelector("#result").textContent = operations.join("")
        }
    }
}
document.querySelector("#percent").onclick = _ => {
    if (!(operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/")) {
        document.querySelector("#recent").textContent = ""
        if (result.length !== 0 && result !== Infinity) {
            let float = parseFloat((result / 100).toFixed(9))
            document.querySelector("#result").textContent = float
            result = float
        }
        else {
            let float = parseFloat((eval(operations.join("")) / 100).toFixed(9))
            document.querySelector("#result").textContent = float
            result = float
        }
    }
}
document.querySelector("#divide").onclick = _ => {
    document.querySelector("#recent").textContent = ""
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "/"
    }
    else if (result.length !== 0 && result !== Infinity) {
        let strResult = `${result}`
        operations = [...strResult.split("")]
        operations.push("/")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("/")
    }
    else {
        operations.push("/")
    }
    result = ""
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#multi").onclick = _ => {
    document.querySelector("#recent").textContent = ""
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "*"
    }
    else if (result.length !== 0 && result !== Infinity) {
        let strResult = `${result}`
        operations = [...strResult.split("")]
        operations.push("*")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("*")
    }
    else {
        operations.push("*")
    }
    result = ""
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#minus").onclick = _ => {
    document.querySelector("#recent").textContent = ""
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "-"
    }
    else if (result.length !== 0 && result !== Infinity) {
        let strResult = `${result}`
        operations = [...strResult.split("")]
        operations.push("-")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("-")
    }
    else {
        operations.push("-")
    }
    result = ""
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#plus").onclick = _ => {
    document.querySelector("#recent").textContent = ""
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "+"
    }
    else if (result.length !== 0 && result !== Infinity) {
        let strResult = `${result}`
        operations = [...strResult.split("")]
        operations.push("+")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("+")
    }
    else {
        operations.push("+")
    }
    result = ""
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#one").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(1)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#two").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(2)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#three").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(3)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#four").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(4)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#five").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(5)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#six").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(6)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#seven").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(7)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#eight").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(8)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#nine").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(9)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#zero").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(0)
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#dot").onclick = _ => {
    result = ""
    document.querySelector("#recent").textContent = ""
    operations.push(".")
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#equal").onclick = _ => {
    let ans = eval(operations.join(""))
    if (ans || ans === 0 || isNaN(ans)) {
        let floatAns = parseFloat(ans.toFixed(9))
        document.querySelector("#recent").textContent = operations.join("") + "="
        if (floatAns === Infinity || floatAns === -Infinity || isNaN(floatAns)) {
            document.querySelector("#result").textContent = "Can't divide by zero."
            result = Infinity
        }
        else {
            document.querySelector("#result").textContent = floatAns
            result = floatAns
        }
    }
    operations = []
}
