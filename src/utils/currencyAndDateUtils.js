function centsToReais(moneyInCents, showNegative) {
    const absoluteValue = Math.abs(moneyInCents);
    const isNegative = moneyInCents !== absoluteValue;
    const integer = Math.trunc(absoluteValue / 100);
    const rawCents = String(absoluteValue % 100);
    const cents = rawCents.length === 2 ? rawCents : `${rawCents}0`;
    return `${(showNegative && isNegative) ? '-' : ''} ${integer},${cents}`;
}

function reaisToCents(moneyinReais) {
    const moneyInCents = Number(moneyinReais.replace('.', '').replace(',', ''));
    return moneyInCents;
}

function autoCompleteCurrencyValue(value) {
    if (value[0] === '-') {
        return '0.00';
    }
    const moneyInCents = reaisToCents(value);
    const integer = Math.trunc(moneyInCents / 100);
    const cents = String(moneyInCents % 100);
    if (integer === 0) {
        return cents.length === 2 ? `0.${cents}` : `0.0${cents}`;
    }
    return `${integer}.${cents.length === 2 ? cents : `0${cents}`}`;
}

function formatDate(stringDate) {
    const date = new Date(stringDate);
    const dayOfMonth = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    return `${dayOfMonth}/${month}`;
}

export {
    centsToReais,
    autoCompleteCurrencyValue,
    reaisToCents,
    formatDate,
};
