import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

initializeApp({
    apiKey: "AIzaSyBKLvRC8Jw8GvxbfQRfWfsQPMA9ItOPxK0",
    authDomain: "chat-688ad.firebaseapp.com",
    projectId: "chat-688ad",
    storageBucket: "chat-688ad.appspot.com",
    messagingSenderId: "519985246370",
    appId: "1:519985246370:web:c8f2a10b66c12f698d27fb",
    measurementId: "G-SR1TSGRJ9K"
})

export const Context = createContext(null)

const auth = getAuth()
const firestore = getFirestore()

ReactDOM.render(
  <Context.Provider value={{
    firestore,
    auth
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
