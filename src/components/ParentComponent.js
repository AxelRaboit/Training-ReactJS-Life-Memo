import React, { Component } from 'react';
import SimpleComponent from './SimpleComponent';
import PureComp from './PureComponent';
import FunctionComp from './FunctionComp';

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'SpiderMan'
      }
    }
    

    changeToBatman = () => {
        this.setState({
            name: 'BatMan'
        })
    }

    render() {

        console.log('%c render() du composant parent !', 'color: red;');

        return (
            <div>
                <p>
                    <span className='red'>Parent Component: </span>
                    {this.state.name}
                </p>
                <SimpleComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <FunctionComp name={this.state.name}/>

                <button onClick={this.changeToBatman}>changer en BatMan</button>
            </div>
        )
    }
}

export default ParentComponent;
