import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute"
import { Login, Register }from "./components/Login/index";
import WebApp from "./components/WebApp"
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  };

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }


  render () {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";

    return (
      <Router>
      <div className="App">
        {/* <PrivateRoute exact path = '/WebApp' component={WebApp}/>
        <Route exact path="/" component={Login} /> */}
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      </Router>
    );
 
  }

};

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );

};

export default App;
