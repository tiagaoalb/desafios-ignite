import styles from './TaskInputBar.module.css'
import plus from '../assets/plus.svg'
import { useState } from 'react'
import { TaskCardProps } from './TaskCard'

import { v4 as uuidv4 } from 'uuid'

export interface TaskInputBarProps extends TaskCardProps {
  addTask: (newTask: TaskCardProps) => void
}

export function TaskInputBar({ addTask }: TaskInputBarProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.trim() === '') return

    const newTask = {
      id: uuidv4(),
      description: inputValue,
      isComplete: false,
    }

    addTask(newTask)
    setInputValue('')
  }

  return (
    <div className={styles.taskinput}>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!inputValue}>
          Criar
          <img src={plus} alt="" />
        </button>
      </form>
    </div>
  )
}
