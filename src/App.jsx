import React from 'react'

const App = () => {
  return (
    <div className='app'>
      <main className='main'>
        <div className="profile">
          <img src="/img/profile_pic.jpeg" alt="" id="profile__img" />
          <p id="twitter">michaelsondev</p>
          <p id="slack">oluseun.akintayo@gmail.com</p>
        </div>
        <div className="links">
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
        </div>
      </main>
    </div>
  )
}

export default App;