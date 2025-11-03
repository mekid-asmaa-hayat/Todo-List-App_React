    import * as React from 'react';

    import {
    Card,
    CardContent,
    Typography,
    Grid,
    IconButton,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    } from '@mui/material';
    
    import CheckIcon from '@mui/icons-material/Check';
    import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
    import CreateIcon from '@mui/icons-material/Create';
    

    export default function Todo({
    id,
    title,
    details,
    isCompleted,
    isEditing,
    handleDelete,
    handleComplete,
    handleEditToggle,
    handleEditSave,
    }) {
    const [editText, setEditText] = React.useState(title);
    const [open, setOpen] = React.useState(false); // 🔹 état pour le dialogue

    // Gérer la saisie du texte
    const handleChange = (e) => setEditText(e.target.value);

    // Sauvegarder les modifications
    const handleSave = () => {
        handleEditSave(id, editText);
    };

    // Ouvrir le dialogue de confirmation
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Fermer sans supprimer
    const handleClose = () => {
        setOpen(false);
    };

    // Confirmer la suppression
    const handleConfirmDelete = () => {
        handleDelete(id);
        setOpen(false);
    };

    return (
        <>
        {/* 🗨️ Boîte de dialogue de confirmation */}
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Delete confirmation"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this task?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error" autoFocus>
                Delete
            </Button>
            </DialogActions>
        </Dialog>

        {/* 📝 Carte de la tâche */}
        <Card
            sx={{
            minWidth: 275,
            bgcolor: "#1200b6",
            color: "#fff",
            marginBottom: "10px",
            p: 1,
            }}
        >
            <CardContent>
            <Grid container spacing={2} alignItems="center">
                {/* Texte ou champ d’édition */}
                <Grid size={8} style={{ textAlign: "left" }}>
                    {isEditing ? (
    <TextField
        value={editText}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        fullWidth
        variant="outlined"
        size="small"
        autoFocus
        InputLabelProps={{
        style: { color: "white" }
        }}
        InputProps={{
        style: { color: "white" }
        }}
        sx={{
        "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
        },
        }}
    />
    ) : (
    <>
        <Typography
        sx={{
            textDecoration: isCompleted ? "line-through" : "none",
            color: "white",
        }}
        >
        {title}
        </Typography>
        <Typography variant="body2">{details}</Typography>
    </>
    )}

                </Grid>

                {/* Boutons d’action */}
                <Grid
                size={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                >
                {/* ✅ Terminer */}
                <IconButton
                    onClick={() => handleComplete(id)}
                    sx={{
                    color: isCompleted ? "white" : "green",
                    background: isCompleted ? "green" : "white",
                    "&:hover": { background: "#e0e0e0" },
                    }}
                >
                    <CheckIcon />
                </IconButton>

                {/* ✏️ Modifier */}
                {isEditing ? (
                    <IconButton
                    onClick={handleSave}
                    sx={{
                        color: "#fff",
                        background: "#51a0dc",
                        "&:hover": { background: "#3c89c9" },
                    }}
                    >
                    <CheckIcon />
                    </IconButton>
                ) : (
                    <IconButton
                    onClick={() => handleEditToggle(id)}
                    sx={{
                        color: "#51a0dc",
                        background: "#fff",
                        border: "2px solid #51a0dc",
                        "&:hover": { background: "#e3f2fd" },
                    }}
                    >
                    <CreateIcon />
                    </IconButton>
                )}

                {/* 🗑️ Supprimer avec confirmation */}
                <IconButton
                    onClick={handleClickOpen}
                    sx={{
                    color: "#d32525",
                    background: "#fff",
                    border: "2px solid #d32525",
                    "&:hover": { background: "#ffebee" },
                    }}
                >
                    <DeleteOutlineIcon />
                </IconButton>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
        </>
    );
    }
