import { Bounce, ToastContainer as ToastContainerLib } from "react-toastify";

const TOAST_AUTO_CLOSE_MILISECONDS = 4000;

export const ToastProvider = () => {
    return (
        <ToastContainerLib
            position="bottom-left"
            autoClose={TOAST_AUTO_CLOSE_MILISECONDS}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
};
