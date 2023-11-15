import { useState } from "react";

import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

interface TasksProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Tasks({ content, onDeleteTask }: TasksProps) {
  const [completed, setCompleted] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCheckboxChange() {
    setCompleted(!completed);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            id={`checkbox-${content}`}
            checked={completed}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`checkbox-${content}`}>
            {content}
          </label>
        </div>
        <button onClick={handleDeleteTask} title="Deletar tarefa">
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}