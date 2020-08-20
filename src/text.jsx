import React, { Fragment } from 'react'
import './test.css'

let uid = 0;

class Test extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:++uid,
            show:true
        }
    }

    componentWillMount(){
        console.log('componentWillMount');

    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');

    }

    handleClick = ()=>{
        this.setState({
            id:0
        })
    }

    handleToggle = ()=>{
        this.setState({
            show:this.state.show ? false : true
        })
    }

        render(){
            console.log('render')
            const {id , show} = this.state
            return(
            <Fragment>
                  <h1 className={show ? 'show' : 'hide'} style={{cursor:"pointer",}} onClick={this.handleClick}>{id}</h1>
                  <button onClick={this.handleToggle}>toggle</button>
            </Fragment>
            
            )
        }
}


export  default Test