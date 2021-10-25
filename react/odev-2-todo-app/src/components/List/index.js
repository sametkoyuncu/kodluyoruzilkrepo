import React from 'react'
//This section should be hidden by default and shown when there are todos

let checkToggleAllTodoStatus = false
//false is mean not pressed before
// false -> true = check all
// true -> false = uncheck all

let toggleTodos = []

function List({ todos, updateTodos, filterBy }) {
  const toggleCheckbox = (e) => {
    //add class for label
    e.target.classList.toggle('checked')
    //add class for parent li
    e.target.parentElement.parentElement.classList.toggle('completed')
    //change status to task item
    todos[e.target.value].status === 'active'
      ? (todos[e.target.value].status = 'completed')
      : (todos[e.target.value].status = 'active')

    updateTodos([...todos])
  }

  const deleteItem = (e, index) => {
    todos.splice(index, 1)
    updateTodos([...todos])
  }

  const checkToggleAllTodo = (e) => {
    if (checkToggleAllTodoStatus) {
      toggleTodos = todos.map((item) => {
        return {
          task: item.task,
          status: 'active',
        }
      })
      e.target.previousSibling.checked = false
      checkToggleAllTodoStatus = !checkToggleAllTodoStatus
    } else {
      toggleTodos = todos.map((item) => {
        return {
          task: item.task,
          status: 'completed',
        }
      })
      e.target.previousSibling.checked = true
      checkToggleAllTodoStatus = !checkToggleAllTodoStatus
    }

    updateTodos([...toggleTodos])
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label
        htmlFor="toggle-all"
        onClick={(e) => checkToggleAllTodo(e)}
        hidden={todos.length < 1 ? true : false}
      >
        Mark all as complete
      </label>

      <ul className="todo-list">
        {todos
          .filter((item) => {
            if (filterBy === 'active' || filterBy === 'completed')
              return item.status === filterBy
            else return true
          })
          .map((item, index) => (
            <li
              key={index}
              className={item.status == 'completed' ? 'completed' : ''}
            >
              <div className="view">
                <input
                  className={
                    item.status == 'completed'
                      ? 'checkbox toggle checked'
                      : 'checkbox toggle'
                  }
                  onChange={toggleCheckbox}
                  value={index}
                  type="checkbox"
                  checked={item.status === 'completed' ? true : false}
                />
                <label>{item.task}</label>
                <button
                  className="destroy"
                  onClick={(e) => deleteItem(e, index)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default List
