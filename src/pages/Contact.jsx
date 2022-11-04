import React from 'react';

const Contact = () => {
	const [formData, setFormData] = React.useState({
		firstName: '', lastName: '', email: '', message: '', isChecked: false
	});
	const [error, setError] = React.useState({
		firstName: null, lastName: null, email: null, message: null, isChecked: null
	})
	const [loading, setLoading] = React.useState(false);
	
	const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

	const submit = (e) => {
		e.preventDefault();
		console.log(formData);
		if(formData.firstName.trim() === '') {
			document.getElementById("first_name").focus();
			setError({...error, firstName: 'Required'});
		} else if(formData.lastName.trim() === '') {
			document.getElementById("last_name").focus();
			setError({...error, lastName: 'Required'});
		} else if(formData.email.trim() === '') {
			document.getElementById("email").focus();
			setError({...error, email: 'Required'});
		} else if(!validateEmail.test(formData.email)) {
			document.getElementById("email").focus();
			setError({...error, email: 'Enter a valid email address'});
		} else if(formData.message.trim() === '') {
			document.getElementById("message").focus();
			setError({...error, message: 'Required'});
		} else if(!formData.isChecked) {
			document.getElementById("checkbox").focus();
			setError({...error, isChecked: 'Please check the box above to proceed'});
		}
		else {
			setLoading(true);
			setError(null);
			setTimeout(() => {
				setLoading(false);
				alert("Message sent successtully!");
				window.location.reload(true);
			}, 2000);
		}
	}

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
									type="text" id="first_name" placeholder='Enter your first name'
									onChange={e => setFormData({ ...formData, firstName: e.target.value })}
									value={formData.firstName}
									name="firstName"
								/>
								<span className='error'>{ error?.firstName }</span>
							</div>
							<div className="form-item last_name">
								<label htmlFor="last_name">Last name</label>
								<input
									type="text" id="last_name" placeholder='Enter your last name'
									onChange={e => setFormData({ ...formData, lastName: e.target.value })}
									value={formData.lastName}
									name="lastName"
								/>
								<span className='error'>{ error?.lastName }</span>
							</div>
						</div>
						<div className="form-item email">
							<label htmlFor="email">Email</label>
							<input
								type="email" id="email" placeholder='yourname@email.com'
								onChange={e => setFormData({ ...formData, email: e.target.value })}
								value={formData.email}
								name="email"
							/>
							<span className='error'>{ error?.email }</span>
						</div>
						<div className="form-item message">
							<label htmlFor="message">Message</label>
							<textarea
							  id="message" placeholder="Send me a message and I'll reply you as soon as possible"
								onChange={e => setFormData({ ...formData, message: e.target.value })}
								value={formData.message}
								name="message"
							></textarea>
							<span className='error'>{ error?.message }</span>
						</div>
						<div className="form-item checkbox">
							<input type="checkbox" id="checkbox" onChange={(e) => setFormData({ ...formData, isChecked: e.target.checked })} />
							<label htmlFor="checkbox">
								You agree to providing your data to michaelsondev who may contact you.
							</label>
						</div>
						<span className='error'>{ error?.isChecked }</span>
						<button disabled={loading} id='btn__submit' style={{ opacity: loading ? 0.5 : 1 }} onClick={submit}>
							{ loading ? 'Sending message' : 'Send message' }
						</button>
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