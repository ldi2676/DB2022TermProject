// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
// import cors from 'cors'
import Han from './Component/Han.js';
import { Route, Routes } from 'react-router-dom';

const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io'
//useState가 반환을 할떄 array로 반환하는데 첫번째에는 mahjong, 두번째는 setmahjong가 반환
const Table = () => {
	const [mahjong,setmahjong] = useState([])
	 useEffect(() => {
    getmahjong()
  }, [])
	
	 const getmahjong = async() => { //awite를 사용하려면 async()를 써야함
    try {
      const res = await axios.get(EXPRESS_URL + '/')
      //console.log(res)
      setmahjong(res.data)
    } 
 	catch (err) {
      console.log(err)
    }
  }
	return(
		<table>
		<thead>
			<th>yaku_name</th>
			<th>menzen</th>
			<th>call</th>
		</thead>
		<tbody>
			{ mahjong.map( (g, i) => <tr key={i}>
                       <td>{g.yaku_name}</td>
                       <td>{g.menzen}</td>
                       <td>{g.call}</td>
                       {/* <td><img src={`${g.boxart}`}/></td> */}
                       <td><img src={`https://picsum.photos/70?random=${i}`} alt='yaku_img'/></td>
                     </tr>) }
		</tbody>
		</table>
	)
}
			
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
			
			<Han/>
			<Table/>
			
				
			
		
		
	</div>
	)
}

export default App;
