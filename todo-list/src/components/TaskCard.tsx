import styles from './TaskCard.module.css'
import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'
import TrashCan from '../assets/trash.svg'

interface TaskCardProps {
  description: string
  isComplete: boolean
  toggleCompletion: () => void
}

export function TaskCard({
  description,
  isComplete,
  toggleCompletion,
}: TaskCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <button onClick={toggleCompletion}>
          {isComplete ? <img src={Checked} /> : <img src={Unchecked} />}
        </button>
        <span className={isComplete ? styles.completed: ''}>{description}</span>
        <button>
          <img src={TrashCan} />
        </button>
      </div>
    </div>
  )
}
