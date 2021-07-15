import React, {useState} from 'react';
// import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'

const App: React.FunctionComponent = () => {
  const [todo, setTodos] = useState([])

  const addHandler = (title: string) => {
    console.log('Add New Todo', title)
  }
  return (
  <>
   {/* <Navbar /> */}
    <div className="container">
        <TodoForm onAdd={addHandler} />
   </div>
   </>
  );
}

export default App;
