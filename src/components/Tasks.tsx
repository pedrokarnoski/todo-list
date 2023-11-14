import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            id="myCheckbox"
          />
          <label htmlFor="myCheckbox">
            Descrição da tarefa
          </label>
        </div>
        <button title="Deletar tarefa">
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}