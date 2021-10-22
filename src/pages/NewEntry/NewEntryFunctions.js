import { reaisToCents } from "../../Utils/CurrencyAndDateUtils";
import { postNewEntry } from "../../Utils/External Libs/service";
import { sendErrorAlert, sendConfirmAlert, sendSuccessAlert } from "../../Utils/External Libs/sweetAlertUtils";
import { logout } from "../../Utils/BrowsingUtils";

function areEntryInputsValid({description, value}) {
    if (value <= 0) {
        sendErrorAlert("O valor deve ser maior que zero!");
        return false
    }
    if (description.length < 3 || description.length > 40) {
        sendErrorAlert("Sua descrição deve ter entre 3 e 40 caracteres!");
        return false
    }
    if (description.split("").filter( char => char !== " ").length < 3) {
        sendErrorAlert("Sua descrição deve ter pelo menos 3 characteres que não sejam espaços!");
        return false
    }
    if (description.length < 3 || description.length > 40) {
        sendErrorAlert("Sua descrição deve ter entre 3 e 40 caracteres!");
        return false
    }
    return true;

}

async function ValidateAndSendEntryValues(event, newEntry, userToken, setIsContactingServer, browsingHistory) {
    event.preventDefault();

    const { description } = newEntry;
    const value = reaisToCents(newEntry.value);
    const type = newEntry.type === "deposit" ? 1 : 0;
    if(areEntryInputsValid({description, value})) {
        const confirmation = await sendConfirmAlert(`Deseja mesmo enviar esta ${type ? "entrada" : "saída"}?`, "Sim")
        if (confirmation.isConfirmed) {
            const body = { description, value, type };
            setIsContactingServer(true);
            postNewEntry(userToken, body)
            .then( async res => {
                setIsContactingServer(false);
                const alert = await sendSuccessAlert(`Sua ${type ? "entrada" : "saída"} foi enviada com sucesso!`);
                if (alert.isConfirmed) {
                    browsingHistory.push("/homescreen")
                }
            })
            .catch( async error => {
                setIsContactingServer(false);
                if (!error.response || error.response.status === 500) {
                    const alert = await sendErrorAlert("Oh não! parece que houve um erro com o servidor.. Por favor, faça login novamente");
                    if (alert.isConfirmed) {
                        return logout(browsingHistory)
                    }
                }
                if (error.response.status === 401 || error.response.status === 404) {
                    const alert = await sendErrorAlert("Oh não! Parece que houve um erro com o seu login.. Por favor, faça login novamente");
                    if (alert.isConfirmed) {
                        return logout(browsingHistory)
                    }
                }
                if (error.response.status === 400) {
                    await sendErrorAlert("Oh não! Parece que houve um erro com a validação dos campos! por favor, tente novamente mais tarde");
                    return
                }
            })
        }
    }
}

export {
    ValidateAndSendEntryValues,
}