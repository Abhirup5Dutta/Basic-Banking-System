import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about'>
            <h1 className="head">About the Website</h1>
            <p className="bdy">
                This Website is built as the part of the set of tasks alloted during my internship at <strong>The Sparks Foundation</strong>.
                <br />
                This is a basic banking website having services like
                <ul>
                    <li>Creating an account</li>
                    <li>Viewing the customers in the bank</li>
                    <li>Transfering money from one bank account to another</li>
                    <li>Transfering money from one bank account to another</li>
                    <li>Viewing the transaction history of the bank</li>
                </ul>

                <br />
                <p>You can avail all the services via clicking the website link.</p>
                <br />
                <p>This website is made using ReactJS and firestore database of firebase that is a NoSQL database.</p>
                <br />
                <p>Feel free to give your revies regarding the website design, looks and improvements in the contact section.</p>
                <br />
                To get in touch with me, head onto the contact section.
            </p>
            <p className="regard">
                Regards, Abhirup Dutta
            </p>
        </div>
    )
}

export default About
