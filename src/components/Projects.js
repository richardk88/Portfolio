import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className='projects' id='projects'>
                <h1 className='projectsTitle'>
                    <b>P<span className='underline'>ROJECT</span>S</b>
                </h1>
                <div className='projectContainer'>
                    <a href='http://grader-trim-62765.bitballoon.com/' target='blank'><img src={require('./images/hangman.png')} alt='' className='projectImage'/></a>
                    <a href='https://mysterious-waters-71092.herokuapp.com/' target='blank'><img src={require('./images/bucket_by_day.png')} alt='' className='projectImage'/></a>
                    <a href='https://make-it-yourself.herokuapp.com/' target='blank'><img src={require('./images/miy.png')} alt='' className='projectImage'/></a>
                    <a href='https://project-rovr.herokuapp.com/' target='blank'><img src={require('./images/rovr.png')} alt='' className='projectImage'/></a>
                    <a href='https://nomnom-app.herokuapp.com/' target='blank'><img src={require('./images/nomnom.png')} alt='' className='projectImage'/></a>
                    <img src={require('./images/coming_soon.jpg')} alt='' className='projectImage comingSoon'/>
                </div>
            </div>
        );
    }
}

export default Projects;