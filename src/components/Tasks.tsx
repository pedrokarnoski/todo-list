import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

interface TasksProps {
  content: string;
  onDeleteTask: (task: string, completed: boolean) => void;
  onToggleComplete: (task: string, completed: boolean) => void;
}

export function Tasks({ content, onDeleteTask, onToggleComplete }: TasksProps) {
  const { content: taskContent, completed } = content;

  function handleDeleteTask() {
    onDeleteTask(content.content, completed);
  }

  function handleCheckboxChange() {
    onToggleComplete(taskContent, !completed);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            id={`checkbox-${taskContent}`}
            checked={completed}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`checkbox-${taskContent}`}>
            {taskContent}
          </label>
        </div>
        <button onClick={handleDeleteTask} title="Deletar tarefa">
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}