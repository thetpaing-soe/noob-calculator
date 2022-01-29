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
    operations.pop()
    if (operations.length === 0) {
        document.querySelector("#result").textContent = "0"
    }
    else {
        document.querySelector("#result").textContent = operations.join("")
    }
}
document.querySelector("#percent").onclick = _ => {
    if (!(operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/")) {
        let number = parseFloat(operations.join(""))
        if (!isNaN(number)) {
            document.querySelector("#result").textContent = number / 100
            result = number / 100
        }
    }
    operations = []
}
document.querySelector("#divide").onclick = _ => {
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "/"
    }
    else if (result.length !== 0 && result !== Infinity) {
        operations.push(result)
        operations.push("/")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("/")
    }
    else {
        operations.push("/")
    }
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#multi").onclick = _ => {
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "*"
    }
    else if (result.length !== 0 && result !== Infinity) {
        operations.push(result)
        operations.push("*")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("*")
    }
    else {
        operations.push("*")
    }
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#minus").onclick = _ => {
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "-"
    }
    else if (result.length !== 0 && result !== Infinity) {
        operations.push(result)
        operations.push("-")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("-")
    }
    else {
        operations.push("-")
    }
    document.querySelector("#result").textContent = operations.join("")
}
document.querySelector("#plus").onclick = _ => {
    if (operations[operations.length - 1] === "+" || operations[operations.length - 1] === "-" || operations[operations.length - 1] === "*" || operations[operations.length - 1] === "/") {
        operations[operations.length - 1] = "+"
    }
    else if (result.length !== 0 && result !== Infinity) {
        operations.push(result)
        operations.push("+")
    }
    else if (operations.length === 0) {
        operations.push("0")
        operations.push("+")
    }
    else {
        operations.push("+")
    }
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
    strAns = `${ans}`
    if (strAns.length > 15 && strAns.split("").find(dot => dot === ".")) {
        ans = ans.toFixed(9)
    }
    document.querySelector("#recent").textContent = operations.join("") + " ="
    document.querySelector("#result").textContent = ans
    operations = []
    result = ans
}