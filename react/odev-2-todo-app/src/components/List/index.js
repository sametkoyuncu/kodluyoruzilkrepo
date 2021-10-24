import React from 'react'
//This section should be hidden by default and shown when there are todos
function List({ todos, updateTodos }) {
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

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle checked" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button className="destroy"></button>
          </div>
        </li>
        {todos.map((item, index) => (
          <li
            key={index}
            className={item.status == 'completed' ? 'completed' : ''}
          >
            <div className="view">
              <input
                className={
                  item.status == 'completed' ? 'toggle checked' : 'toggle'
                }
                onChange={toggleCheckbox}
                value={index}
                type="checkbox"
              />
              <label>{item.task}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
