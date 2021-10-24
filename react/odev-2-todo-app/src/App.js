import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <section className="todoapp">
        <Header todos={todos} addTodo={setTodos} />
        <List todos={todos} />
        <Footer />
      </section>
    </div>
  )
}

export default App
