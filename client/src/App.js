// import logo from './logo.svg';
import React from 'react';

import './App.css';
// import cors from 'cors'
import Header from './Component/Header/Header.js';
// import Han from './Component/body/Han.js';
// import YakuDecs from './Component/body/YakuDecs.js';
import Table from './Component/body/MultiJoin/Table.js';

import Footer from './Component/Footer/Footer.js';


// const App=() =>{}
//두 방식 다 가능
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//----------------------------------------------
// const App=() =>{}
//두 방식 다 가능
function App() {
	return(
	<div className="App">
		<Header/>
		<Table/>
		<Footer/>
	</div>
	)
}

export default App;
