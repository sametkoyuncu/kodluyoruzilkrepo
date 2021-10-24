import React from 'react'

function Footer({ todos, updateTodos, filterBy, updateFilterBy }) {
  const activeTodos = todos.filter((item) => item.status === 'active')

  const deleteItems = () => {
    const unDeletedTodos = todos.filter((item) => item.status !== 'completed')
    updateTodos([...unDeletedTodos])
  }

  const changeFilter = (filter) => {
    updateFilterBy(filter)
  }

  return (
    <footer className="footer" hidden={todos.length < 1 ? true : false}>
      {/*This footer should hidden by default and shown when there are todos*/}
      {/* This should be `0 items left` by default */}
      <span className="todo-count">
        <strong>{activeTodos.length}</strong>
        &nbsp;items left
      </span>

      <ul className="filters">
        <li>
          <a
            className={filterBy == 'all' ? 'selected' : ''}
            onClick={() => changeFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={filterBy == 'active' ? 'selected' : ''}
            onClick={() => changeFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={filterBy == 'completed' ? 'selected' : ''}
            onClick={() => changeFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>

      {/* Hidden if no completed items are left ↓ */}
      <button
        className="clear-completed"
        hidden={todos.length === activeTodos.length ? true : false}
        onClick={deleteItems}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
