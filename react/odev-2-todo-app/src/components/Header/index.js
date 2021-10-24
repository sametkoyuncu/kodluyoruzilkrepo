import { useState } from 'react'

function Header({ addTodo, todos }) {
  const [todo, setTodo] = useState('')

  const onChangeInput = (e) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      console.log(e.target.value)
      addTodo([...todos, todo])
      setTodo('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          className="new-todo"
          value={todo}
          placeholder="What needs to be done?"
          autoFocus
          onKeyUp={onSubmit}
          onChange={onChangeInput}
        />
      </form>
    </header>
  )
}

export default Header
