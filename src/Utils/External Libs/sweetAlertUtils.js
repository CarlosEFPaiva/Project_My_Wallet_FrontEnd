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


export {
    sendErrorAlert,
    sendSuccessAlert,
};