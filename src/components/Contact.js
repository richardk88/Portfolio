import React, { Component } from 'react';
import {FaAngleDoubleRight} from 'react-icons/lib/fa'

class Contact extends Component {
    render() {
        return (
            <div className='contact' id='contact'>
                <h1 className='contactTitle'><b>C<span className='underline'>ONTAC</span>T</b></h1>
                <p>Have a question or want to work together?</p>
                <br />
                <p className='emailContainer'><a href="mailto:rkim0788@gmail.com" className='email hvr-grow'>Email Me <FaAngleDoubleRight className='contactArrow'/></a></p>
            </div>
        );
    }
}

export default Contact;
