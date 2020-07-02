import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'this is dummy title',
            isInput:false
        }
    }
    eventHandle(){
        this.setState({
            ...this.state,
            isInput:true
        })
    }
    editEvent(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
        
    }
    inputChange(e){
        this.setState({
            title:e.target.value
        })
    }
    onBlurEvent(){
        this.setState({
        ...this.setState,
        isInput:false
        })
    }
    render() {
            let output=null
            if(this.state.isInput){
                output = <input type="text" 
                onChange={(event)=> this.inputChange(event)}
                onBlur={(event)=>this.onBlurEvent(event)}
                onKeyPress={(event)=> this.editEvent(event)}
                value={this.state.title}/>
            }else{
                output=(
                    <div className="d-flex py-10 title">
                        <h1 className="display-4">{this.state.title}</h1>
                        
                        <img className="icon ml-auto"
                        
                        onClick={()=>this.eventHandle()}
                        
                         src="https://img.icons8.com/cotton/2x/edit--v1.png" alt=""/>
                    </div>
                )
            }     
        
        return (
            <div>
                {output}
            </div>
        );
    }
}

export default Title;