import Swal from 'sweetalert2';

function sendErrorAlert(html) {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html,
    });
}

function sendSuccessAlert(html) {
    return Swal.fire({
        title: 'Beleza!',
        html,
        icon: 'success',
    });
}

function sendConfirmAlert(title, buttonText) {
    return Swal.fire({
        title,
        showCancelButton: true,
        confirmButtonText: buttonText,
        cancelButtonText: 'Cancelar',
    });
}

export {
    sendErrorAlert,
    sendSuccessAlert,
    sendConfirmAlert,
};
