import React from 'react'

function Footer({ todos }) {
  const activeTodos = todos.filter((item) => item.status === 'active')
  return (
    <footer className="footer">
      {/*This footer should hidden by default and shown when there are todos*/}
      {/* This should be `0 items left` by default */}
      <span className="todo-count">
        <strong>{activeTodos.length}</strong>
        &nbsp;items left
      </span>
      <ul className="filters">
        <li>
          <a className="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
      {/* Hidden if no completed items are left ↓ */}
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
