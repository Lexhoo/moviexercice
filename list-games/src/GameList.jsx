import React, {Component} from 'react';
import Game from './Game';

class GameList extends Component {
    constructor(props){
        super(props)
        this.state={
            jeux:[]

        }

        
    }
    componentDidMount() {
        fetch("http://www.campus-bordeaux.ovh:3002/joysticks/api/games")
           .then(res => res.json())
           .then(res => this.setState({ 
               jeux: res, }))
    }      

    nowSuppImage = () => {
        const id = this.props.demande.id;
        this.props.supprProfil(id)
      }

    render() {
        return (
            
            <div className="App"> 
            {this.state.jeux.map(jeu => (<Game newGame={jeu}/>))}
            
      </div>
            
        )
    }
}

export default GameList;