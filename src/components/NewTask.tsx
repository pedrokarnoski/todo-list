import { PlusCircle } from "phosphor-react";

import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.input}>
      <textarea
        name="newTask"
        placeholder="Adicione uma nova tarefa"
        // value={newCommentText}
        // onChange={handleNewCommentChange}
        // onInvalid={handleNewCommentInvalid}
        required
      />
      <footer>
        <button type="submit" >
          Criar
          <PlusCircle size={20} />
        </button>
      </footer>
    </div>
  );
}
