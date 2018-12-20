import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="d-flex jc-between">
                <div className="logo d-flex jc-center ai-center">Horizon.</div>
                
                <ul className="d-flex ai-center">
                    <a href><li>Home</li></a>
                    <a href><li>The Conference</li></a>
                    <a href><li>Speakers</li></a>
                    <a href><li>Past Events</li></a>
                    <a href><li>RSVP</li></a>
                </ul>
                
            </header>
        )
    }
}

export default Header