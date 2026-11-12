import './App.css';
import User from './user';

import panda from './images/panda.png'
import man from './images/man.png'
import hacker from './images/hacker.png'

import User_feedback from './User_feedback'

function App() {
  return (
    <div className="App">
        <h1 style={{textAlign: "center"}}>Student's full name</h1>

        <main className='container'>
          {/* user 1 */}
           <User_feedback username = "Panda"> 
              <User image = {panda}  date = "10/15/26" msg="I'm hungry"/>
           </User_feedback>

          {/* user 2 */} 
          <User_feedback username = "Man in Black"> 
               <User image = {man}  date = "10/20/26" msg="UFO"/>
          </User_feedback>

          {/* user 3 */}
          <User_feedback username = "The Kid"> 
              <User image = {hacker}  date = "11/02/26" msg="Catch me if you can"/>
          </User_feedback>
        </main>

        {/** POST COMMENTS */}
        <section className="postcomment">
            <ul className="commentlist">
              <li>testing</li>
            </ul>
        </section>

        
    </div>
  );
}

export default App;
