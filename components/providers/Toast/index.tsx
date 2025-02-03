import {
    Bounce,
    ToastContainer as ToastContainerLib,
    ToastContainerProps,
} from "react-toastify";

const TOAST_AUTO_CLOSE_MILISECONDS = 4000;

const toastSettings: ToastContainerProps = {
    position: "bottom-left",
    autoClose: TOAST_AUTO_CLOSE_MILISECONDS,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    transition: Bounce,
};

export const ToastProvider = () => {
    return <ToastContainerLib {...toastSettings} />;
};
