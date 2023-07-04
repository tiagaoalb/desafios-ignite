import styles from './TaskStatus.module.css'

export function TaskStatus() {
  return (
    <div className={styles.status}>
      <div className={styles.created}>
        <span>Tarefas criadas</span>
        <span>0</span>
      </div>
      <div className={styles.finished}>
        <span>Concluídas</span>
        <span>0</span>
      </div>
    </div>
  )
}
