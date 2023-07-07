import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let pouetable = {
  azer : 'azer',
  pouet : 'pouet',
  etFranchement : 'Voila'
}
let myArray = [];
for(let i = 0; i < 10; i++) {
  myArray.push(i);
}
myArray.forEach(() => {
  console.log(`Pwet ${i} ${pouetable.pouet}`);
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
