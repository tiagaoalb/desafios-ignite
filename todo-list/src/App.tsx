import { TaskInputBar } from './components/TaskInputBar'
import { TaskPanel } from './components/TaskPanel'
import { TaskStatus } from './components/TaskStatus'
import { TopBar } from './components/TopBar'

import './global.css'

export function App() {
  return (
    <div>
      <TopBar />
      <TaskInputBar />
      <TaskStatus />
      <TaskPanel />
    </div>
  )
}