import React, {useState} from 'react';
// import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'
const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }
  const toggleHandler = (id: number) => {
     setTodos(prev => prev.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
     }))
  }
  
  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Are sure to delete element')
    if(shouldRemove){
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  // if(todos.length === 0) {
  //   return <p className="center">poka del net</p>
  // }
  return (
  <>
    <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
   </div>
   </>
  );
}

export default App;
