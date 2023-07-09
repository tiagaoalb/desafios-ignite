import styles from './TaskPanel.module.css'
import Clipboard from '../assets/clipboard.png'
import { TaskCard } from './TaskCard'

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { TaskInputBar, TaskInputBarProps } from './TaskInputBar'
import { TaskStatus } from './TaskStatus'

export function TaskPanel() {
  const [tasks, setTasks] = useState([
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
  ])

  const toggleCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  const addTask = (newTask: TaskInputBarProps) => {
    setTasks([...tasks, newTask])
  }

  return (
    <main>
      <TaskInputBar addTask={addTask} />
      <TaskStatus />
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              description={task.description}
              isComplete={task.isComplete}
              toggleCompletion={() => toggleCompletion(task.id)}
            />
          )
        })
      ) : (
        <div className={styles.panel}>
          <div className={styles.content}>
            <img src={Clipboard} alt="Figura de uma prancheta" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
