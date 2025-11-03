    import { createContext, useContext, useState } from "react";
    import Snackbar from "@mui/material/Snackbar";
    import MuiAlert from "@mui/material/Alert";

    const ToastContext = createContext();

    // composant MUI pour l'alerte stylée
    const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        type: "success",
    });

    // Fonction pour afficher le toast
    const showToast = (message, type = "success") => {
        setToast({ open: true, message, type });
    };

    // Fermer le toast
    const handleClose = (_, reason) => {
        if (reason === "clickaway") return;
        setToast((prev) => ({ ...prev, open: false }));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
        {children}

        {/* Snackbar MUI */}
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

    // Hook personnalisé
    export const useToast = () => { return useContext(ToastContext)};
