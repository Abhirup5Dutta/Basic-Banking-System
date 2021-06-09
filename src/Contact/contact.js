import React, { useState } from 'react'
import './contact.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/IconButton';
import { db } from '../firebase'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [loader, setLoader] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if (name === '' || email === '' || review === '') {
            alert('Sorry your feedback could not be tracked!!');
            setLoader(false);
        } else {
            db.collection('reviews').add({
                name: name,
                email: email,
                review: review
            })
                .then(() => {
                    alert('Thankyou for taking out time to send your valuable feedback..');
                    setLoader(false);
                })
                .catch((error) => {
                    alert(error.message);
                    setLoader(false);
                });

            setName('');
            setEmail('');
            setReview('');
        }
    }

    return (
        <div className='contact'>
            <h1 className='heading head-cont'>Contact Us</h1>
            <hr />
            <div className="dev">
                <h3>Developer information:</h3>
                <p>Hello, I am Abhirup Dutta, currently in my 2nd year pursuing B.Tect in Computer Science</p>
                <p><strong>The Sparks Foundation</strong> gave me the oppurtunity to develop my web development skills via this GRIP internship</p>
                <p>To get in touch with me, following are the links to my LinkedIn, GitHub nad Twitter respectively</p>
                <div className="profiles">
                    <Button style={{ color: "black" }} onClick={() => window.open("https://www.linkedin.com/in/abhirup-dutta-577417103/", '_blank')}>
                        <LinkedInIcon />
                    </Button>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://github.com/Abhirup5Dutta", '_blank')}>
                        <GitHubIcon />
                    </Button>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://twitter.com/Abhirup77291227", '_blank')}>
                        <TwitterIcon />
                    </Button>
                </div>
            </div>
            <hr />
            <div className="feedback">
                <hl className="header-feed">Reviews and Feedback</hl>
                <small className='head-small'>Your reviews and feedback will be highly appretiated</small>
                <form className="form-style" onSubmit={submitForm} >
                    <label className='label-font'>Name*</label>
                    <input className="form-input" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                    <label className='label-font'>Email id*</label>
                    <input className="form-input" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email id" />
                    <label className='label-font'>Feedback*</label>
                    <textarea className="form-input" name="text" id="text" cols="30" rows="10" value={review} onChange={(e) => setReview(e.target.value)} placeholder="Please provide your valuable feedback"></textarea>
                    <button className="btn" type='submit' style={{ background: loader ? "#ccc" : "#2785c4" }} >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
