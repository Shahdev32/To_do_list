import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-pink-300 text-center">
      <h1 className="text-violet-900 text-5xl pt-12 font-bold">To-Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
