import Swal from "sweetalert2";

function sendErrorAlert(html) {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: html,
      })
}

function sendSuccessAlert(html) {
    return Swal.fire({
        title: 'Beleza!',
        html: html,
        icon: 'success',
      })
}

function sendConfirmAlert(title, buttonText, confirmFunction ) {
    return Swal.fire({
        title: title,
        showCancelButton: true,
        confirmButtonText: buttonText,
        cancelButtonText: `Cancelar`,
      })
}


export {
    sendErrorAlert,
    sendSuccessAlert,
    sendConfirmAlert
};