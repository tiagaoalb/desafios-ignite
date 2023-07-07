import styles from './TaskPanel.module.css'
import Clipboard from '../assets/clipboard.png'

export function TaskPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.content}>
        <img src={Clipboard} alt="Figura de uma prancheta" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}