import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

import { PlusCircle } from "phosphor-react";

import clipboard from "../assets/clipboard.svg";

import { Tasks } from "./Tasks"

import styles from "./ListTasks.module.css";

export function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { content: newTaskText, completed: false }]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(taskToDelete: string, completed: boolean) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.content !== taskToDelete);

    setTasks(tasksWithoutDeletedOne);

    if (completed) {
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1);
    }
  }

  function toggleComplete(taskContent: string, completed: boolean) {
    const updatedTasks = tasks.map((task) =>
      task.content === taskContent ? { ...task, completed } : task
    );

    setTasks(updatedTasks);
    setCompletedTasks(updatedTasks.filter((task) => task.completed).length);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <textarea
          name="newTask"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
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
        <p>Tarefas criadas<span>{tasks.length}</span></p>
        <p>Concluídas<span>{completedTasks} {tasks.length ? 'de ' + tasks.length : null}</span></p>
      </header>

      {!tasks.length ? <div className={styles.separator} /> : null}

      <div className={styles.tasks}>
        {tasks.length ? (
          <>
            {tasks.map((task, index) => {
              return (
                <Tasks
                  key={`${task.content}-${index}`}
                  content={task}
                  onDeleteTask={deleteTask}
                  onToggleComplete={toggleComplete}
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