import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ITaskForm } from "../utils/types";
import { Context } from "../context/context";

const newTask = {
  title: "",
  description: "",
  dueDate: "",
  completed: false,
};

export default function NewTask() {
  const {
    dispatch,
    store: { editingTask },
  } = useContext(Context);

  const [task, setTask] = useState<ITaskForm>(newTask);

  // if we have a title in our editingTask state, it means we are editing
  const inEditMode = editingTask?.title;

  useEffect(() => {
    setTask(editingTask);
  }, [editingTask]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inEditMode) {
      dispatch({ type: "UPDATE_TASK", payload: task });
    } else {
      dispatch({ type: "CREATE_TASK", payload: task });
    }
    setTask(newTask);
  };

  return (
    <Box sx={{ marginBottom: 5 }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box>
          <Box sx={{ display: "flex", marginBottom: 2, gap: 1 }}>
            <TextField
              label="Title"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              required
              value={task?.title || ""}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Due date"
              onChange={(e) => {
                setTask({ ...task, dueDate: e.target.value });
              }}
              required
              type="date"
              value={task?.dueDate || ""}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <TextField
            label="Description"
            fullWidth
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required
            value={task?.description || ""}
            InputLabelProps={{ shrink: true }}
            multiline
            rows={4}
            sx={{ marginBottom: 1 }}
          />

          <Button variant={"contained"} type="submit">
            {inEditMode ? "Save" : "Create"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
