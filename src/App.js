import React, { Component } from 'react';
import './App.css';
import Records from './Records';
import store from "./reducers/reduxStore";
import db from "./firebase.js";

// import {dispatch} from "react-redux";
import {ADD_PATIENT} from "./actions/actionTypes";
class App extends Component {
  constructor(props) {
    super(props);
    this.users = {}; // <- set up react state
  }

  componentWillMount() {
    console.log("called fetch func");
    db.collection('users').get().then(data => {
      data.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
      /*console.log("calling users",data);
      if (data.val()) {
        console.log("firebase",data.val());
        this.setState({users: data.val()});

        // dispatch({ type: ADD_PATIENT, payload: data.val() });
      }*/
    });
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
