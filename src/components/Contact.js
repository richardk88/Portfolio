import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contact' id='contact'>
                <h1 className='contactTitle'>C<span className='underline'>ONTAC</span>T</h1>
                <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
                <br />
                <div className="contact-form">
                    <form data-toggle="validator">
                        <div>
                            <input type="text" className="form-control" placeholder="Name" data-error="Field can't be blank!" required />
                        </div>
                        <div>
                            <input type="email" className="form-control" placeholder="Email" data-error="Field can't be blank!" required />
                        </div>
                        <div>
                            <textarea data-minlength="10" className="form-control" placeholder="Message" data-error="Minimum of 10 characters" required></textarea>
                        </div>
                        <div>
                            <button type="submit" id="submit" name="submit">SEND MESSAGE</button>
                        </div>
                    </form> 
                <br />
                </div>
            </div>
        );
    }
}

export default Contact;