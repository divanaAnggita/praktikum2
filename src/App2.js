import React, {Component} from 'react';
  import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App container">
        <div className="alert alert-info">
          <h3 className="text-danger">Ini Project Pertama React JS</h3>
          <p>Belajar react itu mudah</p>
          <button className="mr-1 btn btn-success">setuju</button>
          <button className="btn btn-info">iya Dong</button>
        </div>
      </div>
    );
  }
}
export default App;