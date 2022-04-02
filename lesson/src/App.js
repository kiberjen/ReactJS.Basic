import './App.css';
import Message from './Message';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       Hello, {props.name}

       <Message testing={'testing'} />
       
      </header>
    </div>
  );
}

export default App;
