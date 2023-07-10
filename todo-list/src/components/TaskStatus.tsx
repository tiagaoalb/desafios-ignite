import styles from './TaskStatus.module.css'

interface TaskStatusProps {
  created: number;
  finished: number;
}

export function TaskStatus({ created, finished }: TaskStatusProps) {
  return (
    <div className={styles.status}>
      <div className={styles.created}>
        <span>Tarefas criadas</span>
        <span>{created}</span>
      </div>
      <div className={styles.finished}>
        <span>Concluídas</span>
        <span>{finished}</span>
      </div>
    </div>
  )
}
