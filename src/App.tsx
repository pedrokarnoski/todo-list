import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <ListTasks />
      </div>
    </div>
  )
}
