import './App.css';
import TaskList  from './TaskList';
function App() {
  // can add any js here
 
  const name = "Yehan "

  // no  bool and obj
  return (
    <div className="App">
      <div className='container'>
          <h1 className='title'>Task Tracker list {name}</h1> 
          <TaskList />
      </div>

    </div>
  );
}

export default App;
