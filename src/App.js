import React, { Component } from 'react';
import './App.css';
import Records from './Records';
import store from "./reducers/reduxStore";
import firebase from "./firebase.js";

// import {dispatch} from "react-redux";
import {ADD_PATIENT} from "./actions/actionTypes";
class App extends Component {
  componentDidMount() {
    
    //.then(() => {
    console.log("called fetch func");
    firebase.database().ref('users').on("value", data => {
      console.log("calling users",data);
      if (data.val()) {
        console.log("firebase",data.val());
        // dispatch({ type: ADD_PATIENT, payload: data.val() });
      }
    });
    //}).catch((err) => {
    //  console.log("lolwatchthis")
    //});;
    // this.setState({"database":firebase.database()});
  }
  render() {
    return (
      <div className="App">
        <Records />
      </div>
    );
  }
}

export default App;
