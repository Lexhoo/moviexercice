import React, {Component} from 'react';
import "./Game.css"
class Game extends Component {
    render(){
    return (
        <div className="jeux ">
        <div>{this.props.newGame.id}</div>
        <div>{this.props.newGame.name}</div>
        <div> <img src={this.props.newGame.pochette} alt="pochette"/></div>
        <div>{this.props.newGame.descripiton}</div>
        <div> <img src={this.props.newGame.image1} alt="img"/></div>
        <div> <img src={this.props.newGame.image2} alt="img"/></div>
        <div>{this.props.newGame.is_promo}</div>
        <div><img src={this.props.newGame.promo} alt="promo"/></div>
        <div>{this.props.newGame.theme}</div>
        <div>{this.props.newGame.date}</div>
        <button>{this.props.button}Select</button>
        <button>{this.props.button}Supprimer</button>
        </div>
    
      
        
    );
    }
  };
    
 


export default Game;