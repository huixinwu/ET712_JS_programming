import React from 'react'
import './App.css'
import ModalWindow from './Modal_window'

const User_feedback = function(props){
    // function to open the feedback window
    const openmodelwindow = ()=>{
        const modalwindow = document.querySelector(".modalwindow")
       
        // set username for modal window when the feedback is clicked
        const modalusername = document.querySelector('.modalusername')
        modalusername.innerHTML = `for <i>${props.username}</i>`

        modalwindow.style.display = "block"
    }
    

    return(
    <>  
        <div className= "feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">
                    <p>{props.username}</p>
                </div>

                <div className="description">
                    {props.children}
                </div>

                <div className = "cardfooter" onClick={openmodelwindow}>
                    <p>
                        <span>&#10011;</span>
                         Add Feedback
                    </p>
                </div>
            </section>
        </div>

        {/** MODAL WINDOW */}
        <ModalWindow />
    </>)
}
export default User_feedback