import styles from './TaskCard.module.css';
import Checked from '../assets/checked.svg'
import Unchecked from '../assets/unchecked.svg'
import TrashCan from '../assets/trash.svg'

export function TaskCard() {
  return (
    <div className={styles.card}>
      <img src={Unchecked} alt="" />
      <h3>A descrição da tarefa vai aqui</h3>
      <img src={TrashCan} alt="" />
    </div>
  )
}