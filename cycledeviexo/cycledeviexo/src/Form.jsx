import React, {Component} from 'react';

class App extends Component {
    constructor (props){
        super(props);
        this.state = {value : "", globalTitle : ""} ;
            
}
    

    handleChange(event) {
        this.setState({
            value : event.target.value
        })
    }
 
   render () {
    return (

        <form>  
            <input name="firstName" type="text" onChange={this.handleChange} /> 
            <h1>{this.state.value}</h1>
        </form>

    )        
  }
}

export default App;