import React, { Component } from 'react'
import Header from '../components/Header';
import Div1 from '../components/Div1';
import Div2 from '../components/Div2'

class Home extends Component{
    render(){
        return(
            <div>
                
                <Header />
                <Div1 />
                <Div2 />
                
            </div>
        )
    }
}

export default Home
