function getTokenFromLocalStorage() {
    return localStorage.getItem("MyWalletToken");
}

function saveTokenInLocalStorage(token) {
    localStorage.setItem("MyWalletToken", token);
}

function clearLocalStorage() {
    localStorage.removeItem("MyWalletToken");
}

export {
    getTokenFromLocalStorage,
    saveTokenInLocalStorage,
    clearLocalStorage
}