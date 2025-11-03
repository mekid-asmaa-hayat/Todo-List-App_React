import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import { useState, useEffect } from 'react';

export default function TodoList() {
  // --- États

  
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});
                                                                                                                                                                                                
  const [titleinput, setTitleinput] = useState("");
  const [alignment, setAlignment] = useState("left");

  // 🟢 Charger les tâches sauvegardées au démarrage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 🔵 Sauvegarder les tâches à chaque changement
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // --- Ajouter une tâche
  const handleClick = () => {
    if (titleinput.trim() === "") {
      alert("Veuillez entrer une tâche !");
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: titleinput.trim(),
      details: '',
      isCompleted: false,
      isEditing: false,
    };

    setTodos([...todos, newTodo]);
    setTitleinput("");
  };

  // --- Supprimer une tâche
  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // --- Terminer une tâche
  const handleComplete = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  // --- Modifier une tâche
  const handleEditToggle = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isEditing: !t.isEditing } : t
      )
    );
  };

  const handleEditSave = (id, newTitle) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, title: newTitle, isEditing: false } : t
      )
    );
  };

  // --- Filtrage selon le bouton sélectionné
  let filteredTodos = todos;
  if (alignment === "center") {
    filteredTodos = todos.filter((t) => t.isCompleted); // المنجز
  } else if (alignment === "right") {
    filteredTodos = todos.filter((t) => !t.isCompleted); // غير المنجز
  }

  // --- Rendu JSX
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, mt: 4 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            My Tasks
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Filtres */}
          <ToggleButtonGroup
            style={{ direction: "rtl", marginTop: "20px" }}
            exclusive
            value={alignment}
            onChange={(event, newAlignment) => setAlignment(newAlignment)}
            aria-label="text alignment"
          >
            <ToggleButton value="right">Incomplete</ToggleButton>
            <ToggleButton value="center">Completed</ToggleButton>
            <ToggleButton value="left">ALL</ToggleButton>
          </ToggleButtonGroup>
        </CardContent>

        {/* Liste des Todos */}
        {filteredTodos.map((t) => (
          <Todo
            key={t.id}
            id={t.id}
            title={t.title}
            details={t.details}
            isCompleted={t.isCompleted}
            isEditing={t.isEditing}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            handleEditToggle={handleEditToggle}
            handleEditSave={handleEditSave}
          />
        ))}

        {/* Champ d'ajout */}
        <Box sx={{ background: "#fff", padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <TextField
                value={titleinput}
                onChange={(e) => setTitleinput(e.target.value)}
                fullWidth
                label="Task title"
                variant="outlined"
              />
            </Grid>
            <Grid size={4}>
              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={handleClick}
                sx={{ height: "100%" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
}
