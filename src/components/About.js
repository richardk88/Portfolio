import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <div className='scrollMouse'>
                    <a href='#about'>
                        <div className='mouse'>
                            <div className='wheel'></div>
                        </div>
                    </a>
                </div>
                <div className='about' id='about'>
                    <h1 className='aboutTitle'>A<span className='underline'>BOU</span>T</h1>
                    <div className='aboutContainer'>
                        <div className='aboutMe'>
                            <img src={require('./images/headshot.png')} className='headshot' />
                            <p className='paragraph'>
                                Hi! I'm a Full-Stack Web Developer based in Atlanta, GA. I really enjoy building clean, responsive web apps by maintaining a healthy balance between functionality and a richer user experience in all of my work. 
                                Let me know if you think I can be of service to you. 
                                Thanks for stopping by!
                            </p>
                        </div>
                        <div className='skills'>
                            <div className='skill'> 
                                <img src={require('./images/html5.png')} alt='html5'/>
                                <img src={require('./images/css3.png')} alt='css3'/>
                                <img src={require('./images/react.png')} alt='react'/>
                                <img src={require('./images/ruby.png')} alt='ruby'/>
                                <img src={require('./images/rails.png')} alt='rails'/>
                                <img src={require('./images/javascript.png')} alt='javascript'/>
                                <img src={require('./images/node-js.png')} alt='node'/>
                                <img src={require('./images/mongodb.png')} alt='mongodb'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;