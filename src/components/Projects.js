import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className='projects' id='projects'>
                <h1 className='projectsTitle'>P<span className='underline'>ROJECT</span>S</h1>
                <div container>
                    <div className='projectContainer'>
                        <a href='http://photographer-watches-86485.bitballoon.com/' target='blank'><img src={require('./images/hangman.png')} className='projectImage'/></a>
                        <a href='https://mysterious-waters-71092.herokuapp.com/' target='blank'><img src={require('./images/bucket_by_day.png')} className='projectImage'/></a>
                        <a href='https://make-it-yourself.herokuapp.com/' target='blank'><img src={require('./images/miy.png')} className='projectImage'/></a>
                        <a href='http://project-rover.herokuapp.com/' target='blank'><img src={require('./images/rovr.png')} className='projectImage'/></a>
                        <a href='https://nomnom-app.herokuapp.com/' target='blank'><img src={require('./images/nomnom.png')} className='projectImage'/></a>
                        <img src={require('./images/coming_soon.jpg')} className='projectImage comingSoon'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;