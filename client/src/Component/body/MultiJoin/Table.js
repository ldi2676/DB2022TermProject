import React,{useState,useEffect} from 'react'
import axios from 'axios';

//useState가 반환을 할떄 array로 반환하는데 첫번째에는 mahjong, 두번째는 setmahjong가 반환
const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io'
const Table = () => {
	const [mahjong,setmahjong] = useState([])
	 useEffect(() => {
    getmahjong()
  }, [])
	
	 const getmahjong = async() => { //awite를 사용하려면 async()를 써야함
    try {
      const res = await axios.get(EXPRESS_URL + '/Table')
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
			<th>역 이름</th>
			<th>멘젠 시</th>
			<th>후로 시</th>
			<th>설명</th>
			<th>이미지 예시</th>
		</thead>
		<tbody>
			{ mahjong.map( (g, i) => <tr key={i}>
                       <td>{g.yaku_name}</td>
                       <td>{g.menzen}</td>
                       <td>{g.call}</td>
                       <td>{g.desc}</td>
						<td>
							<img src={"/workspace/TermProject2022/DB/img/pinfu.JPG"} alt='yaku_img'/>
							<img src={"../../../../../DB/img/pinfu.JPG"} alt='yaku_img'/>
							<img src={process.env.PUBLIC_URL + '/img/logo192.png'} alt='yaku_img'/>
							<img src={"../../../../public/img/logo192.png"} alt='yaku_img'/>
							  </td>
                       {/* <td><img src={`${g.boxart}`}/></td> */}
                       
			 </tr>) }
		</tbody>
		</table>
	)
}
export default Table;