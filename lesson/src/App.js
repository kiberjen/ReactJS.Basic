import './App.css';
import Message from './Message';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       Hello, {props.name}

       <Message />
       
      </header>
    </div>
  );
}

export default App;
