// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import cors from 'cors'
import Header from './Component/Header/Header.js';
import Han from './Component/body/Han.js';
import YakuDecs from './Component/body/YakuDecs.js';
import YakuImage from './Component/body/YakuImage.js';
import Community from './Component/body/Community/Community.js';
import Comments from './Component/body/Community/Comments/Comments.js';
import AllComments from './Component/body/Community/Comments/AllComments.js';
import Table from './Component/body/MultiJoin/Table.js';
import Footer from './Component/Footer/Footer.js';
import Login from './Component/body/Login/Login.js';
import { Route, Routes} from "react-router-dom";

function App() {
	return(

		  <div className="App">
			<Header />
			<Routes>
			    <Route path="/" exact element={<Table/>}/>
			    <Route path="/Han" element={<Han/>}/>
				<Route path="/YakuDecs" element={<YakuDecs/>}/>
			    <Route path="/YakuImage" element={<YakuImage/>}/>
				<Route path="/Community" element={<Community/>}/>
				<Route path="/Comments" element={<Comments/>}/>
				<Route path="/AllComments" element={<AllComments/>}/>
				<Route path="/Login" element={<Login/>}/>
			</Routes>
			<Footer/>
		  </div>

	)
}

export default App;
