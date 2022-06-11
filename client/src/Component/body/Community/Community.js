import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Community.css';
var count_id = 0;
const EXPRESS_URL = 'http://localhost:3010';
const todayTime = () => {
	let now = new Date();
	let todayYear = now.getFullYear();
	let todayMonth = now.getMonth() + 1;
	let todayDate = now.getDate();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	return todayYear + '-' + todayMonth + '-' + todayDate + ' ' + hours + ':' + minutes + ':' + seconds;
}

const addItem = () => {
	const User = document.getElementById('user-input').value;
	const Title = document.getElementById('title-input').value;
	const Date = todayTime().slice(0, 19);
	const table = document.getElementById("user_list")
	const Content = document.getElementById('content-input').value;
	const tr = document.createElement("tr")
	const td1 = document.createElement("td")
	const td2 = document.createElement("td")
	const td3 = document.createElement("td")
	const td4 = document.createElement("td")
	const td5 = document.createElement("td")
	const td6 = document.createElement("button")

	td1.innerText = count_id;
	td2.innerText = User;
	td3.innerText = Title;
	td4.innerText = Date;
	td5.innerText = Content;
	td6.innerText = "삭제";
	td6.onclick = function () {
		this.parentElement.parentElement.removeChild(tr);
	}
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(td4)
	tr.appendChild(td5)
	tr.appendChild(td6)
	table.appendChild(tr)
	count_id++;



	axios({
		method: 'post',
		url: EXPRESS_URL + "/User_Post",
		data: {
			User: User,
			Title: Title,
			Date: Date,
			Content: Content
		}
	})
		.then((response) => {
			console.log(response)
			console.log(count_id)
			// document.getElementById('profile_pic').src = "data:image/png;base64," + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
		})
		.catch((error) => {
			console.error(error)
		});
}


const post_notice = () => {
	const User = document.getElementById('user-input').value;
	const Title = document.getElementById('title-input').value;
	const Date = todayTime().slice(0, 19);
	axios.post(EXPRESS_URL + "/UserComment", {
		// headers: {
		//     Authorization: `Bearer ${access_token}`
		// }

		User: User,
		Title: Title,
		Date: Date

	})
		.then((response) => {
			console.log(response)
			// document.getElementById('profile_pic').src = "data:image/png;base64," + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
		})
		.catch((error) => {
			console.error(error)
		});
}

//useState가 반환을 할떄 array로 반환하는데 첫번째에는 mahjong, 두번째는 setmahjong가 반환
const Community = () => {
	const [post_map, setpost_map] = useState([])
	useEffect(() => {
		get_notice()
		post_notice()
	}, [])
	const table = document.getElementById("user_list")
	const get_notice = async () => { //awite를 사용하려면 async()를 써야함
		try {
			const res = await axios.get(EXPRESS_URL + '/User_Post')
			console.log(res)
			// console.log(res.data)
			// console.log(res.data[0])
			setpost_map(res.data)
			console.log(res.data[res.data.length - 1].write_id)
			count_id = parseInt(res.data[res.data.length - 1].write_id) + 1;
			console.log(count_id + 1)
		}
		catch (err) {
			// console.log(err)
		}
	}

	return (
		<div className='CommunityWrap'>
			<div className='CommunityPage'>
				<div className='form-wrapper'>
					<span > 작성자 : </span>
					<input id="user-input" type='text' placeholder='작성자를 적어주세요' />
					<span > 게시물 제목 : </span>
					{/* <span id="date-input">{ }</span> */}
					<input id="title-input" type='text' placeholder='제목을 적어주세요' />
					<input id="content-input" type='text' placeholder='내용을 적어주세요' />
				</div>
				<button className="submit-button" onClick={addItem}>입력</button>
				<h1>Movie Review</h1>
				<div className='Community-container'>
					<h2>게시판</h2>
					<div>
						<table id="user_list">
							<thead>
								<tr>
									<th>ID</th>
									<th>유저 이름</th>
									<th>제목</th>
									<th>작성시간</th>
									<th>내용</th>
									<th>삭제 버튼</th>
								</tr>
							</thead>
							<tbody id="result_search">
								{post_map.map((p, i) => <tr key={i}>
									<td>{p.write_id}</td>
									<td>{p.write_user}</td>
									<td>{p.write_title}</td>
									<td>{p.write_date}</td>
									<td>
										{p.write_content}
									</td>
									<button onClick={function () {
										document.getElementById("user_list").deleteRow(table.rows.length - 1);
									}}>삭제</button>

								</tr>)}
							</tbody>
						</table>
					</div>
				</div>


			</div>

		</div>
	)
}
export default Community;