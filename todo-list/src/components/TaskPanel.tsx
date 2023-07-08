import styles from './TaskPanel.module.css'
import Clipboard from '../assets/clipboard.png'
import { TaskCard } from './TaskCard'

import { v4 as uuidv4 } from 'uuid'

const tasks = [
  {
    id: uuidv4(),
    description: 'A descrição da tarefa vai aqui',
    isComplete: false,
  },
  {
    id: uuidv4(),
    description: 'Aprender a fazer essa bagaça',
    isComplete: true,
  },
  {
    id: uuidv4(),
    description: 'Bora destruir o React!',
    isComplete: true,
  },
]

export function TaskPanel() {
  return (
      <main>
        {tasks.length > 0 ? (tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              description={task.description}
              isComplete={task.isComplete}
            />
          )
        })) : 
        (
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
      </main>
  )
}
