import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");


  // GET TASKS
  const fetchTasks = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch tasks");

      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD TASK
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) throw new Error("Failed to add task");

      setTitle("");
      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  //edit task
  const startEdit = (task) => {
  setEditingId(task.id);
  setEditText(task.title);
};
//save edit
const saveEdit = async (id) => {
  await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: editText }),
  });

  setEditingId(null);
  setEditText("");
  fetchTasks();
};

  // TOGGLE COMPLETE
  const toggleTask = async (task) => {
    try {
      await fetch(`${API_URL}${task.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !task.completed,
        }),
      });

      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}${id}/`, {
        method: "DELETE",
      });

      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredTasks = tasks.filter((task) => {
  if (filter === "all") return true;
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  });

  return (
  <div className="container">
    <h1>Task Manager</h1>

    {/* INPUT */}
    <div className="input-box">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>
    </div>

    {/* STATES */}
    {loading && <p>Loading...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

    <div className="filter-btns">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>


    {/* TASK LIST */}
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          {editingId === task.id ? (
          <>
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={() => saveEdit(task.id)}>Save</button>
          </>
        ) : (
          <>
            <span
              className={`task-text ${task.completed ? "completed" : ""}`}
              onClick={() => toggleTask(task)}
            >
              {task.title}
            </span>
            <button className="icon-btn edit" onClick={() => startEdit(task)}>✏️</button>
            <button className="icon-btn delete" onClick={() => deleteTask(task.id)}>❌</button>
          </>
        )}
        </li>
      ))}
    </ul>
  </div>
);
}
export default App;
