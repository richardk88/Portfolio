import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <div className='scrollMouse'>
                    <div className='mouse'>
                        <div className='wheel'></div>
                    </div>
                </div>
                <div className='about'>
                    <h1>A<span className='underline'>BOU</span>T</h1>
        
                    <div className='aboutContainer'>
                        <div className='aboutMe'>
                            <img src={require('./images/headshot.png')} className='headshot' />
                            <p>
                                I am a Full-Stack Web Developer based in Atlanta, GA. With experience in building richer interactive web apps I maintain a healthy balance between functionality and visual impact in all of my work. 
                                Feel free to look at my portfolio and don't hesitate to contact me if you think I can be of service to you. 
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
                                <img src={require('./images/github.png')} alt='github'/>
                                <img src={require('./images/heroku.png')} alt='heroku'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;