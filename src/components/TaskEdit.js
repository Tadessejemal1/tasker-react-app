import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (event) => {
    event.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(event.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(event.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
