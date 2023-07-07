import styles from './TaskCard.module.css'
// import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'
import TrashCan from '../assets/trash.svg'

export function TaskCard() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={Unchecked} alt="" />
        <span>A descrição da tarefa vai aqui</span>
        <img src={TrashCan} alt="" />
      </div>
    </div>
  )
}
