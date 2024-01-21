import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import InputTodo from './components/InputTodo/InputTodo'
import ListTodo from './components/ListTodo/ListTodo'
import NavbarC from './components/NavbarC/NavbarC'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Pheak',
      isPending: true
    },
    {
      id: 2,
      text: 'ខ្លា',
      isPending: false
    }
  ])

  return (
    <div>
      <NavbarC/>
      <Container>
        <InputTodo todos={todos} setTodos={setTodos}/>
        <ListTodo todos={todos}/>
      </Container>

    </div>
  )
}

export default App