import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";

interface Todo {
  id: string;
  content: string;
  done: boolean;
}

function App() {
  const [todo, setTodo] = useState<Array<Todo>>([]);
  const [input, setInput] = useState("");

  function ReadTodoAdd(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function AddTodo() {
    const newTodo: Todo = {
      id: input,
      content: input,
      done: false,
    };

    setTodo([...todo, newTodo]);
    setInput("");
  }

  function RemoveTodo(id: Todo["id"]) {
    setTodo(todo.filter((element) => element.id != id));
  }

  function ToggleTodo(id: Todo["id"]) {
    setTodo(
      todo.map((element) => {
        if (element.id != id) return element;
        else return { ...element, done: !element.done };
      })
    );
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={input}
          onChange={ReadTodoAdd}
          size="small"
        />
        <Fab size="medium" color="secondary" aria-label="add" onClick={AddTodo}>
          <AddIcon />
        </Fab>{" "}
      </div>
      <ul>
        {todo.map((element) => (
          <li key={element.content}>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2%",
                width: "fit-content",
              }}
            >
              {element.content}
              <IconButton
                aria-label="delete"
                onClick={() => RemoveTodo(element.id)}
              >
                <DeleteIcon />
              </IconButton>{" "}
              <input type="checkbox" onClick={() => ToggleTodo(element.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
