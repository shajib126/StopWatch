import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';




class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <TourList></TourList>
            </div>
        );
    }
}

export default App;