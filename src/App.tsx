import { useContext } from "react";
import Task from "./components/Task";
import { Box, Container } from "@mui/material";
import NewTask from "./components/NewTask";
import Header from "./components/Header";
import { ITask } from "./utils/types";
import { Context } from "./context/context";

function App() {
  const { store } = useContext(Context);

  return (
    <div className="App">
      <Header />
      <Container sx={{ marginTop: "2rem" }}>
        <NewTask />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {store.tasks?.map((task: ITask) => (
            <Task key={task.id} task={task} />
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default App;
