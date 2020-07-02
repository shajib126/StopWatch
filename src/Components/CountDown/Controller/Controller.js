import React, { Component } from 'react';

class Controller extends Component {
    constructor(props){
        super(props);
        this.state={
            start:true,
            reset:false,
            stop:false,
            lap:false
        }
    }

    startHandler(){
        this.setState({
            ...this.state,
            start:false,
            stop:true,
            lap:true
        })
        this.props.getStarted()
    }

    stopHandler(){
        this.setState({
            ...this.state,
            start:true,
            stop:false,
            lap:false,
            reset:true
        })
        this.props.getPause()
    }

    lapHanndler(){
        this.props.getLap()
    }

    resetHandler(){
        this.setState({
            start:true,
            reset:false,
            stop:false,
            lap:false
        })
        this.props.getReset()
    }

    getController(){
        let output = null
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button className="btn btn-success btn-lg px-5 ml-5"
                    onClick={event => this.startHandler()}
                    >Start</button>
                </div>
            )
        }else if(this.state.stop && this.state.lap){

            output = (<div className="my-5">
                    <button className="btn btn-warning btn-lg px-5 ml-5"
                    onClick={event => this.stopHandler()}
                    >Pause</button>

                    <button className="btn btn-primary btn-lg px-5 ml-5"
                    onClick={event => this.lapHanndler()}
                    >Lap</button>
                </div>)

        }else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button className="btn btn-success btn-lg px-5 ml-5"
                    onClick={event => this.startHandler()}
                    >Start</button>

                    <button className="btn btn-danger btn-lg px-5 ml-5"
                    onClick={event => this.resetHandler()}
                    >reset</button>
                </div>
            )
        }
        return output
    }
    render() {
        return this.getController()
    }
}

export default Controller;