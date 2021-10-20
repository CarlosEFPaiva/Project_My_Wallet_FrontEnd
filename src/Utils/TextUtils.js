function centsToReais(moneyInCents) {
    const integer = Math.trunc(moneyInCents / 100);
    const cents = String(moneyInCents % 100);
    return `${integer},${cents.length === 2 ? cents : cents + "0"}`
}

function reaisToCents(moneyinReais) {
    const moneyInCents = Number(moneyinReais.replace(".","").replace(",",""));
    return moneyInCents
}

function autoCompleteCurrencyValue(value) {
    const moneyInCents = reaisToCents(value);
    const integer = Math.trunc(moneyInCents / 100);
    const cents = String(moneyInCents % 100);
    if (integer === 0) {
        return cents;
    }
    return `${integer}.${cents.length === 2 ? cents : cents + "0"}`
}

export {
    centsToReais,
    autoCompleteCurrencyValue,
    reaisToCents
}