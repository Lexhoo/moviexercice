import React, {Component}from 'react';
import './App.css';

class App extends Component {
  constructor (props){
      super(props);
      this.state = {
        value : "",
        globalTitle : ""} ;
         
      this.handleChange = this.handleChange.bind(this)
}
  componentDidMount(){
    console.log("formulaire rendu")
    alert("formulaire rendu")
  }

  handleChange(event) {
      this.setState({
          value : event.target.value

      })
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.dontUpdate) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps) {
  }

  showAlert = (event) => {
    console.log('Formulaire Rendu');
    
  };

  

 render () {
  return (
    <div className="formule">
      <form>  
          <input name="firstName" placeholder="text" onChange={this.handleChange} /> 
          <h1>{this.state.value}</h1>
          <button onClick={this.showAlert} onChange={this.handleChange} >Valdation</button>
      </form>
      
    </div>
  )        
}
}

export default App;