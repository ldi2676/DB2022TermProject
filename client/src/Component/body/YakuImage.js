import React, { useState, useEffect } from 'react'
import axios from 'axios';

//useState가 반환을 할떄 array로 반환하는데 첫번째에는 mahjong, 두번째는 setmahjong가 반환
// const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io'
const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io'
const Yaku_Desc = () => {
	const [mahjong, setmahjong] = useState([])
	useEffect(() => {
		getmahjong()
	}, [])

	const getmahjong = async () => { //awite를 사용하려면 async()를 써야함
		try {
			const res = await axios.get(EXPRESS_URL + '/Yaku_Image')
			//console.log(res)
			setmahjong(res.data)
		}
		catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			역 이미지 테이블
			<table>
				<thead><tr>
					<th>yaku_name</th>
					<th>Image</th></tr>
				</thead>
				<tbody>
					{mahjong.map((g, i) => <tr key={i}>
						<td>{g.yaku_name}</td>
						<td><img src={`/img/yaku/${g.image}`} alt='yaku_img' /></td>
						{/* <td><img src={`${g.boxart}`}/></td> */}

					</tr>)}
				</tbody>
			</table>
		</div>
	)
}
export default Yaku_Desc;
