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
                </div>
            </div>
        );
    }
}

export default About;