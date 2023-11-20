import React, { useContext } from "react";
import { ITask } from "../utils/types";
import { Box, Button, Card, CardActions, Typography } from "@mui/material";
import { Context } from "../context/context";

interface TaskProps {
  task: ITask;
}

export default function Task(props: TaskProps) {
  const { task } = props;
  const { dispatch } = useContext(Context);
  const taskDueDate = new Date(task.dueDate);
  const taskIsDue = taskDueDate < new Date();

  return (
    <Card
      sx={{ width: 345, padding: "10px", borderColor: taskIsDue ? "red" : "" }}
      variant="outlined"
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: 16,
            marginRight: 1,
            fontWeight: "bold",
            textDecoration: task.completed ? "line-through" : "",
          }}
        >
          {task.title}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {task.dueDate}
        </Typography>
      </Box>
      <Typography
        sx={{ textDecoration: task.completed ? "line-through" : "" }}
        gutterBottom
      >
        {task.description}
      </Typography>
      <div>{task.completed}</div>
      <CardActions>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "COMPLETE_TASK", payload: task.id })}
        >
          Complete
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            dispatch({ type: "SET_EDITING_TASK", payload: task });
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
