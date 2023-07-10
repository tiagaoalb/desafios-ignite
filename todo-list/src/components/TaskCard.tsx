import styles from './TaskCard.module.css'
import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'
import TrashCan from '../assets/trash.svg'

export interface TaskCardProps {
  id: string
  description: string
  isComplete: boolean
  toggleCompletion?: () => void
  onDeleteTask: (taskId: string) => void
}

export function TaskCard({
  description,
  isComplete,
  toggleCompletion,
  onDeleteTask
}: TaskCardProps) {
  const handleDeleteTask = () => {
    onDeleteTask(description)
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <button onClick={toggleCompletion}>
          {isComplete ? <img src={Checked} /> : <img src={Unchecked} />}
        </button>
        <span className={isComplete ? styles.completed: ''}>{description}</span>
        <button onClick={handleDeleteTask}>
          <img src={TrashCan} />
        </button>
      </div>
    </div>
  )
}
