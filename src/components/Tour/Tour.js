import React, { Component } from 'react';
import './Tour.css'

class Tour extends Component {
    state={
        showInfo:false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const {id,city, img, name, info} = this.props.tour;
        const {removeHandle} = this.props;
        console.log(img)
        return (
            <div className="card-gallery">
               <div className="card">
                <img src={img} alt=""/>
                <h4>{name}</h4>
                <h3>{city}</h3>
                <span className="arrow_btn"><h5>Info</h5> <img onClick={this.handleInfo} src="https://cdn1.iconfinder.com/data/icons/arrow-inside-a-circle/512/Arrow_4-128.png" alt=""/></span>
                {this.state.showInfo && <p>{info}</p>}
                
                <span className="close_btn"><button onClick={()=>removeHandle(id)}><img src="https://image.flaticon.com/icons/png/512/106/106830.png" alt=""/></button></span>
                </div>
            </div>
        );
    }
}

export default Tour;