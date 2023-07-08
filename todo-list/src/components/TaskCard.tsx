import styles from './TaskCard.module.css'
// import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'
import TrashCan from '../assets/trash.svg'

interface TaskCardProps {
  description: string
  isComplete: boolean
}

export function TaskCard({ description, isComplete }: TaskCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <button>
          <img src={Unchecked} />
        </button>
        <span>{description}</span>
        <button>
          <img src={TrashCan} />
        </button>
      </div>
    </div>
  )
}
