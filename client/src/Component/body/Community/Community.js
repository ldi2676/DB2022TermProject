import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Community.css';
var count_id = 0;
var edit_num = 0;
const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io';
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
function div_show() {
	console.log("div_show진입")
    // var con = document.getElementById("edit_div");
	document.getElementById("edit_div").style.display = 'block';
	// edit_num = p;  
}
// <!-- <span onClick={div_show}> -->

function editItem (p) {
	console.log("editItem진입");
	// console.log(p);
	// console.log(p.write_id);
	
	axios.put(EXPRESS_URL + "/User_Post", {
		headers: {
		    "Content-Type": "application/json"
		},
	data: {
			write_id: (p.write_id),
			write_user: document.getElementById('user-editinput').value,
			write_title:document.getElementById('title-editinput').value,
			write_content: document.getElementById('content-editinput').value
		}
	})
		.then((response) => {
			console.log(response)
			console.log("put 성공")
		})
		.catch((error) => {
			console.error(error)
		});
	window.location.reload();
}
function delItem (p) {
	axios.delete(EXPRESS_URL + "/User_Post", {
		headers: {
		    "Content-Type": "application/json"
		},
	data: {
			write_id: (p.write_id)
			// write_user: document.getElementById('user-input').value,
			// write_title:document.getElementById('title-input').value,
			// write_date: todayTime().slice(0, 19),
			// write_content: document.getElementById('content-input').value
		}
	})
		.then((response) => {
			console.log(response)
			console.log("delete 성공")
		})
		.catch((error) => {
			console.error(error)
		});
	// document.getElementById("result_search").deleteRow((p.write_id-1))
	count_id--;
	window.location.reload();
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
	const td7 = document.createElement("button")

	td1.innerText = count_id;
	td2.innerText = User;
	td3.innerText = Title;
	td4.innerText = Date;
	td5.innerText = Content;
	td7.innerText = "수정";
	td6.innerText = "삭제";
	td6.onclick = function () {
		// delItem(count_id)
	}
	td7.onclick = function () {
		// document.getElementById("result_search").deleteRow((tr.write_id-1))
		// editItem(count_id)
	}
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(td4)
	tr.appendChild(td5)
	tr.appendChild(td6)
	tr.appendChild(td7)
	table.appendChild(tr)
	



	// const User = document.getElementById('user-input').value;
	// const Title = document.getElementById('title-input').value;
	// const Date = todayTime().slice(0, 19);
	axios.post(EXPRESS_URL + "/User_Post", {
		headers: {
		    "Content-Type": "application/json"
		},
	data: {
			write_id: count_id,
			write_user: document.getElementById('user-input').value,
			write_title:document.getElementById('title-input').value,
			write_date: todayTime().slice(0, 19),
			write_content: document.getElementById('content-input').value
		}
	})
		.then((response) => {
			console.log(response)
			console.log("post 성공2")
			// document.getElementById('profile_pic').src = "data:image/png;base64," + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
		})
		.catch((error) => {
			console.error(error)
		});
	count_id++
	
	window.location.reload();
}




//useState가 반환을 할떄 array로 반환하는데 첫번째에는 mahjong, 두번째는 setmahjong가 반환
const Community = () => {

	const [post_map, setpost_map] = useState([])
	useEffect(() => {
		get_notice()
		
	}, [])
	const get_notice = async () => { //awite를 사용하려면 async()를 써야함
		try {
			const res = await axios.get(EXPRESS_URL + '/User_Post')
			console.log(res)
			// console.log(res.data)
			// console.log(res.data[0])
			setpost_map(res.data)
			console.log(res.data[res.data.length - 1].write_id)
			count_id = parseInt(res.data[res.data.length - 1].write_id) + 1;

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
					<span > 게시물 내용 : </span>
					<input id="content-input" type='text' placeholder='내용을 적어주세요' />
				</div>
				<button className="submit-button" onClick={addItem}>입력</button>
				<h1>마작 관련 게시판</h1>
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
									<th>기능</th>
								</tr>
							</thead>
							<tbody id="result_search">
								{post_map.map((p, i) => <tr key={i}>
									<td>{p.write_id}</td>
									<td>{p.write_user}</td>
									<td>{p.write_title}</td>
									<td>{p.write_date}</td>
									<td>
										<details>
											<summary>{p.write_content}</summary>
											<p>댓글</p>
										</details>
										
									</td>
								  	<td>
									<button onClick={function () {
										console.log(i)
										// document.getElementById("result_search").deleteRow((p.write_id-1))
														  delItem(p)

										// console.log(p.write_id-1)
														 
									}}>삭제</button>
								  <button onClick={function () {
										console.log(i);
										// document.getElementById("result_search").deleteRow((p.write_id-1))
												edit_num=p;
														  div_show()

										// console.log(p.write_id-1)
														 
									}}>수정</button></td>
								</tr>)
								}
							</tbody>
						</table>
					</div>
					<div id="edit_div">
					<div id="edit_title_div">수정할 내용</div>
					<div>
					<span > 작성자 : </span>
					<input id="user-editinput" type='text' placeholder='작성자를 적어주세요' />
					<span > 게시물 제목 : </span>
					{/* <span id="date-input">{ }</span> */}
					<input id="title-editinput" type='text' placeholder='제목을 적어주세요' />
					<span > 게시물 내용 : </span>
					<input id="content-editinput" type='text' placeholder='내용을 적어주세요' />
					</div>
						<button className="submit-button" onClick={function () {editItem(edit_num)}}>내용 수정</button>
				</div>
				</div>
				
			</div>

		</div>
	)
}
export default Community;