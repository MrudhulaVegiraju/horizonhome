import React, { Component } from 'react'

class Div2 extends Component {
    render() {
        return (
            <div className="secondBlock relative">
                <div className="centerAlign">
                    <h1 className="mainHeading">The Conference</h1>
                    <table className="table1">
                        <tr>
                            <td className="td11">Two Days of Powerful Talks</td>
                            <td className="td12">03 April 2023</td>
                            <td className="td13">9:00 AM</td>
                        </tr>
                    </table>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​ This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
                    <p>Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                    <a href>
                    <span><i className="fa fa-arrow-down"></i></span>
                    <span className="iconText">Speakers</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Div2