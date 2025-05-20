const info = {
    name: 'Abul',
    Money: 500
}

const pocketMoney = (amount) => {
    const currentMoney = amount.Money;
    const div = currentMoney / 5;
    return div;
}
console.log(pocketMoney(info));