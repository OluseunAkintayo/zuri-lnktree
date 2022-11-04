import React from 'react'

const Contact = () => {
	const [formData, setFormData] = React.useState({
		firstName: '', lastName: '', email: '', message: '', isChecked: false
	});



	return (
		<div className='app'>
      <main className='main'>
				<div className="form">
					<h2 className='contact-title'>Contact Me</h2>
					<p>Hi there, contact me to ask me about anything you have in mind</p>
					<form className='contact-form'>
						<div className="contact-name">
							<div className="form-item first_name">
								<label htmlFor="first_name">First name</label>
								<input
									required type="text" id="first_name" placeholder='Enter your first name'
									
								/>
							</div>
							<div className="form-item last_name">
								<label htmlFor="last_name">Last name</label>
								<input
									required type="text" id="last_name" placeholder='Enter your last name'
									
								/>
							</div>
						</div>
						<div className="form-item email">
							<label htmlFor="email">Email</label>
							<input
								required type="email" id="email" placeholder='yourname@email.com'
								
							/>
						</div>
						<div className="form-item message">
							<label htmlFor="message">Message</label>
							<textarea required placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
						</div>
						<div className="form-item checkbox">
							<input type="checkbox" id="checkbox" required />
							<label htmlFor="checkbox">
								You agree to providing your data to michaelsondev who may contact you.
							</label>
						</div>
						<button id='btn__submit' onClick={submit}>Send message</button>
					</form>
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

export default Contact;