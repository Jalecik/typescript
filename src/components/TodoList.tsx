import React from 'react'
    
type TodoListProps =  {
    todos: any[]
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({ todos }) => {  
  return (
      <ul>
          {todos.map(todo => {
            return (
             <li className='todo'>
                 <label>
                     <input type="checkbox"/>
                     <span></span>
                     <i className="material-icons red-text">delete</i>
                 </label>
             </li>
            )
          })}
      </ul>
  )
}
