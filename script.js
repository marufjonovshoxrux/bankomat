let name = prompt("Как вас зовут")

if (name == "Alex") {
    alert("Добро пожаловать")
    let account = prompt("Номер счёта")
    if (account == 7777) {
        alert("вход выполнен")
        let money = prompt("сколько обналичить")
        if (money >= 10000){
            alert("Всё отлично")
        } else {
            alert("Не достаточно средств ")
        }
    } else {
        alert("Пользователь не найден")
    }
} else {
    alert("Пользователь не найден")
}