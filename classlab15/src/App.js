import './App.css';
import imgdog from './images/dog.jpg'

function App() {
  const username = "user123"
  return (
    <div className="App">
      <h1 style={{color: "darkblue", textAlign: "center"}}> Student's full name</h1>
      <h2>Welcome to React JS </h2>
      <p>Embedded variable</p>
      <p>{username} user has id number {10+5}</p>

      <figure>
        <img src={imgdog} />
      </figure>
    </div>

  );
}

export default App;
