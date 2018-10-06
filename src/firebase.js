// import { ADD_PATIENT } from "./actions/actionTypes";
// import firebase from 'firebase';
// const fetchFirebase = (dispatch) => {
//   const config = {
//     apiKey: "AIzaSyDx9MLamM3bB_7G2GxhG7_PSuBR-P2XfOM",
//     authDomain: "mhc-xhcwst.firebaseapp.com",
//     databaseURL: "https://mhc-xhcwst.firebaseio.com",
//     projectId: "mhc-xhcwst",
//     storageBucket: "mhc-xhcwst.appspot.com",
//     messagingSenderId: "553095309941"
//   };
//   firebase.initializeApp(config);
//   var database = firebase.database();
//   console.log("called fetch func");
//   database.ref().on("value", data => {
//     console.log("calling users",data);
//     if (data.val()) {
//       console.log("firebase",data.val());
//       dispatch({ type: ADD_PATIENT, payload: data.val() });
//     }
//   });
//   console.log("lolwatchthis")
// };
// export {
//   fetchFirebase
// }
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDx9MLamM3bB_7G2GxhG7_PSuBR-P2XfOM",
  authDomain: "mhc-xhcwst.firebaseapp.com",
  databaseURL: "https://mhc-xhcwst.firebaseio.com",
  projectId: "mhc-xhcwst",
  storageBucket: "mhc-xhcwst.appspot.com",
  messagingSenderId: "553095309941"
};
firebase.initializeApp(config);
export default firebase;