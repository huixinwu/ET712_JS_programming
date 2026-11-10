import './App.css';
import User from './user';

import panda from './images/panda.png'
import man from './images/man.png'
import hacker from './images/hacker.png'

function App() {
  return (
    <div className="App">
        <h1 style={{textAlign: "center"}}>Student's full name</h1>
        <main className='container'>
            {/* user 1 */}
            <User image = {panda} username = "Panda" date = "10/15/26" msg="I'm hungry"/>
            {/* user 2 */}
            <User image = {man} username = "Man in Black" date = "10/20/26" msg="UFO"/>
            {/* user 3 */}
            <User image = {hacker} username = "The Kid" date = "11/02/26" msg="Catch me if you can"/>
        </main>
    </div>
  );
}

export default App;
