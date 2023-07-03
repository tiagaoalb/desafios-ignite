import styles from './TaskInputBar.module.css'
import plus from '../assets/plus.svg'

export function TaskInputBar() {
  return (
    <div className={styles.taskinput}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <img src={plus} alt="" />
      </button>
    </div>
  )
}
