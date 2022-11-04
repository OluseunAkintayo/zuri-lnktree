import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='app'>
      <main className='main'>
        <div className="profile">
          <img src="/img/profile_pic.jpeg" alt="" id="profile__img" draggable="false" />
          <p id="twitter">michaelsondev</p>
          <p id="slack">oluseun.akintayo@gmail.com</p>
          <img src="/img/share.png" alt="share-btn" id="share-btn" draggable="false" />
        </div>
        <div className="links">
          <a href="https://twitter.com/michaelsondev">
            <p className="title">Twitter</p>
            {/* <p className="subtext">Begin your tech journey here</p> */}
          </a>
          <a href="https://training.zuri.team/">
            <p className="title">Zuri Training</p>
            <p className="subtext">Begin your tech journey here</p>
          </a>
          <a href="http://books.zuri.team/" id="books">
            <p className="title">Books</p>
            <p className="subtext">Explore books to help with your design and coding journey</p>
          </a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=michaelsondev" target="_blank" id="book__python">
            <p className="title">Python for Beginners</p>
            <p className="subtext">Click to purchase</p>
          </a>
          <a href="https://background.zuri.team" id="pitch">
            <p className="title">Coder Check</p>
            <p className="subtext">Know your coders, really</p>
          </a>
          <a href="https://books.zuri.team/design-rules" id="book__design">
            <p className="title">The Rules of Design</p>
            <p className="subtext">An amazing design book from the Zuri Team</p>
          </a>
          <Link to="/contact" id="contact">
            <p className="title">Contact</p>
          </Link>
        </div>
        <div className="icons">
          <img src="/img/slack.png" alt="slack-logo" draggable="false" />
          <a href="https://github.com/OluseunAkintayo" target="_blank">
            <img src="/img/github.png" alt="github-logo" draggable="false" />
          </a>
        </div>
        <footer>
          <img src="/img/logo.png" alt="logo" className='footer-logo' draggable="false" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src="/img/I4G.png" alt="I4G" className='i4g-logo' draggable="false" />
        </footer>
      </main>
    </div>
  )
}

export default Home;