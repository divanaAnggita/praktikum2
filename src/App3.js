import React, {Component} from 'react';
import './App.css';
import Media from './Components/Media';

class App extends Component {
    render(){
      return(
        <div className="App container col-sm-6">
       <Media image="react.png" title="React JS">
           Cras sit amet nibh libero, in gravida nulla. nulla vel metus
           scelerisque ante sollicitudin. Cras purus odio, vestibulum 
           in vulputate at, tempus vivera turpis
       </Media>

       <Media image="angular.png" title="Angular JS">
           Cras sit amet nibh libero, in gravida nulla. nulla vel metus
           scelerisque ante sollicitudin. Cras purus odio, vestibulum 
           in vulputate at, tempus vivera turpis
       </Media>
       </div>
      );
    }
  }
  
  export default App;
  