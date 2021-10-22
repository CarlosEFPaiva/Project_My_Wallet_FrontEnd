import { sendErrorAlert } from "./External Libs/sweetAlertUtils"

async function moveToSignInPage(browsingHistory) {
    const alert = await sendErrorAlert("Primeiro faça seu login!");
    if (alert.isConfirmed) {
        browsingHistory.push("/");
    }
}

export {
    moveToSignInPage,
}