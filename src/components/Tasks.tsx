import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <input type="radio" />
        <p>Tarefa</p>
      </div>
    </div>
  )
}