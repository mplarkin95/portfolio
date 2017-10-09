import React, { Component } from 'react';
import './App.css';
import PageController from './Components/PageController.js';
import Sidebar from './Components/Sidebar.js';



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {page: "About"}
    
  }

  handleClick(sPage){

    this.setState({page : sPage});

  }



  render() {
    return(
      <div className="container-fluid mt-3">
        <div className="row gutter-20">
          <Sidebar selected={this.state.page} handleClick={(z) => this.handleClick.bind(this, z)} />
          <PageController selected={this.state.page} />
        </div>
      </div>
     )
    }
}

export default App;
