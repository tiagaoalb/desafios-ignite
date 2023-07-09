import styles from './TaskInputBar.module.css'
import plus from '../assets/plus.svg'
import { useState } from 'react'

export function TaskInputBar() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={styles.taskinput}>
      <form onSubmit={handleSubmit}>
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
