    import React from "react";
    import { useToast } from "../Context/ToastContext";

    function AddTask() {
    const { showToast } = useToast();

    const handleAdd = () => {
        showToast("✅ Tâche ajoutée avec succès", "success");
    };

    const handleError = () => {
        showToast("❌ Erreur lors de l’ajout", "error");
    };

    return (
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button onClick={handleAdd}>Ajouter</button>
        <button onClick={handleError}>Simuler erreur</button>
        </div>
    );
    }

    export default AddTask;
