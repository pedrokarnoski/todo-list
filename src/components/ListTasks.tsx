import { useState, FormEvent, ChangeEvent } from "react";

import { PlusCircle } from "phosphor-react";

import clipboard from "../assets/clipboard.svg";

import { Tasks } from "./Tasks"

import styles from "./ListTasks.module.css";

export function ListTasks() {
  const [tasks, setTasks] = useState(["A"]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTaks(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTaks} className={styles.form}>
        <textarea
          name="newTask"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          // onInvalid={handleNewTaskInvalid}
          required
        />
        <footer>
          <button type="submit" >
            Criar
            <PlusCircle size={20} />
          </button>
        </footer>
      </form>
      <header className={styles.header}>
        <p>Tarefas criadas<span>0</span></p>
        <p>Concluídas<span>0</span></p>
      </header>

      {!tasks.length ? <div className={styles.separator} /> : null}

      <div className={styles.tasks}>
        {tasks.length ? (
          <>
            {tasks.map((task) => {
              return (
                <Tasks
                  key={task}
                />
              )
            })}
          </>
        ) : (
          <div className={styles.notFound}>
            <img src={clipboard} alt="Ícone de clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </>
  )
}