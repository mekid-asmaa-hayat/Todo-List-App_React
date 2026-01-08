    import { createContext, useContext, useState } from "react";
    import Snackbar from "@mui/material/Snackbar";
    import MuiAlert from "@mui/material/Alert";

    const ToastContext = createContext();


    const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        type: "success",
    });


    const showToast = (message, type = "success") => {
        setToast({ open: true, message, type });
    };


    const handleClose = (_, reason) => {
        if (reason === "clickaway") return;
        setToast((prev) => ({ ...prev, open: false }));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
        {children}

        
        <Snackbar
            open={toast.open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
            <Alert onClose={handleClose} severity={toast.type}>
            {toast.message}
            </Alert>
        </Snackbar>
        </ToastContext.Provider>
    );
    };


    export const useToast = () => { return useContext(ToastContext)};
