import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div id='about'>
                <div className='scrollMouse'>
                    <a href='#about'>
                        <div className='mouse'>
                            <div className='wheel'></div>
                        </div>
                    </a>
                </div>
                <div className='about'>
                    <h1 className='aboutTitle'><b>A<span className='underline'>BOU</span>T</b></h1>
                    <div className='aboutContainer'>
                        <div className='aboutMe'>
                            <img src={require('./images/headshot.png')} className='headshot' alt=''/>
                            <p className='paragraph'>
                                Hi! I'm an Atlanta based Full-Stack Web Developer focused on creating clean, responsive web apps by maintaining a healthy balance between functionality and a richer user experience in all of my work. 
                                Whether you're interested in working with me or just want to say hello, <a href='#contact' className='contactMe'>I'd love to hear from you</a>!
                            </p>
                        </div>
                        <div className='skills'>
                            <div className='skill'> 
                                <img src={require('./images/html5.png')} alt='html5' className='hvr-grow'/>
                                <img src={require('./images/css3.png')} alt='css3' className='hvr-grow'/>
                                <img src={require('./images/react.png')} alt='react' className='hvr-grow'/>
                                <img src={require('./images/ruby.png')} alt='ruby' className='hvr-grow'/>
                                <img src={require('./images/rails.png')} alt='rails' className='hvr-grow'/>
                                <img src={require('./images/javascript.png')} alt='javascript' className='hvr-grow'/>
                                <img src={require('./images/jquery.png')} alt='jquery' className='hvr-grow'/>
                                <img src={require('./images/node-js.png')} alt='node' className='hvr-grow'/>
                                <img src={require('./images/mongodb.png')} alt='mongodb' className='hvr-grow'/>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={require('./images/transition.png')} className='transition' alt=''/>
            </div>
        );
    }
}

export default About;