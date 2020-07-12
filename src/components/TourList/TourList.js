import React, { Component } from 'react';
import {tourData} from '../../tourData'
import Tour from '../Tour/Tour';
class TourList extends Component {
    state = {
        tour:tourData
    }
    removeHandle = (id) => {
        const {tour} = this.state;
        const closeTour = tour.filter(tour => tour.id !== id);
        this.setState({
            tour:closeTour
        })
    }
    render() {
        const {tour} = this.state;
        console.log(this.state.tour)
        return (
            <div>
                {
                    tour.map(tour => {
                        return <Tour key={tour.id} tour = {tour} removeHandle ={this.removeHandle}></Tour>
                    })
                }
            </div>
        );
    }
}

export default TourList;