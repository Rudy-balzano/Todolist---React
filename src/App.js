import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import { TodoListStore } from './components/TodoList';
import {TodoFilterStore} from './components/TodoFilter'
import { AddTodoForm } from './components/AddTodoForm';
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Provider store={store}>
      <div class = 'body'> 
      <Container class='cont'>
        <TodoListStore />
        <div class="opt">
        <TodoFilterStore/>
        <AddTodoForm/>
        </div>
      </Container>
      </div>
    </Provider>
  );
}

export default App;
