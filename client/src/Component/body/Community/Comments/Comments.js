import React,{useState} from 'react'
import axios from 'axios';

const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io';
var count_id = 0;
var set_title_num = 0;
var edit_num = 0;
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
	
	axios.put(EXPRESS_URL + "/Put_Comments", {
		headers: {
		    "Content-Type": "application/json"
		},
	data: {
			Comment_id: edit_num,
			Comment_user: document.getElementById('user-editinput').value,
			Comment_date: todayTime().slice(0, 19),
			Comment_content: document.getElementById('content-editinput').value
		}
	})
		.then((response) => {
			console.log(response)
			console.log("댓글 put 성공")
			window.location.reload();
		})
		.catch((error) => {
			console.error(error)
		});
	
}
function delItem (p) {
	axios.delete(EXPRESS_URL + "/Delete_Comments", {
		headers: {
		    "Content-Type": "application/json"
		},
	data: {
			Comment_id: p
			// write_user: document.getElementById('user-input').value,
			// write_title:document.getElementById('title-input').value,
			// write_date: todayTime().slice(0, 19),
			// write_content: document.getElementById('content-input').value
		}
	})
		.then((response) => {
			console.log(response)
			console.log("댓글 delete 성공")
			count_id--;
			window.location.reload();
		})
		.catch((error) => {
			console.error(error)
		});
	// document.getElementById("result_search").deleteRow((p.write_id-1))
	
}

const Comments = () => {
	const [post_map, setpost_map] = useState([]);
	const [comment_map, setcomment_map] = useState([]);
	const searchItem = () => {
		axios.post(EXPRESS_URL + "/Post_list", {
			// headers: {
			// 	"Content-Type": "application/json"
			// },
			data: {
				// write_id: count_id,
				write_user : document.getElementById('search_title-input').value,
				write_title : document.getElementById('search_title-input').value
				// write_date: todayTime().slice(0, 19),
				// write_content: document.getElementById('content-input').value
			}
		})
			.then((response) => {
			
			console.log(response)
			console.log(response.data)
			setpost_map(response.data)
			
				console.log("게시물 정보 받아오기 성공")
			})
			.catch((error) => {
				console.error(error)
			})
	}
	
	function get_comment_Item(i){
		axios.post(EXPRESS_URL + "/Comments", {
			// headers: {
			// 	"Content-Type": "application/json"
			// },
			data: {
				// Comment_id: count_id,
				Comment_user : document.getElementById('get_name').innerText,
				Comment_write : i,
				Comment_date: todayTime().slice(0, 19),
				// Comment_content: document.getElementById('content-input').value
			}
		})
			.then((response) => {
			
			console.log(response)
			console.log(response.data)
			setcomment_map(response.data)
			
				console.log("댓글get 성공")
			})
			.catch((error) => {
				console.error(error)
			})
	
	}
	
	function write_comment_Item(i){
		axios.post(EXPRESS_URL + "/Write_Comments", {
			headers: {
				"Content-Type": "application/json"
			},
			data: {
				Comment_id: count_id,
				Comment_user : document.getElementById('comment_user').value,
				Comment_write : set_title_num,
				Comment_date: todayTime().slice(0, 19),
				Comment_content: document.getElementById('comment_content').value
			}
		})
			.then((response) => {
			
			console.log(response)
			console.log(response.data)
			setcomment_map(response.data)
			
			console.log("댓글 post 성공")
			window.location.reload();
			})
			.catch((error) => {
				console.error(error)
			})
	
	}
	
	function pic_title(i) {
	document.getElementById('get_name').innerText = document.getElementById("user_list").getElementsByTagName("td")[i*6+1].innerText;
	document.getElementById('get_title').innerText = document.getElementById("user_list").getElementsByTagName("td")[i*6+2].innerText;
	document.getElementById('get_time').innerText = document.getElementById("user_list").getElementsByTagName("td")[i*6+3].innerText;
	document.getElementById('get_content').innerText = document.getElementById("user_list").getElementsByTagName("td")[i*6+4].innerText;
set_title_num = document.getElementById("user_list").getElementsByTagName("td")[i*6].innerText;	
	
get_comment_Item(document.getElementById("user_list").getElementsByTagName("td")[i*6].innerText);
}

	return (
		<div className='CommentsWrap'>
			<div className='CommentsPage'>
				<div className='form-wrapper'>
					<span > 게시물 제목 : </span>
					<input id="search_title-input" type='text' placeholder='찾으려는 게시물 제목을 입력해주세요' />
				</div>
				<button className="submit-button" onClick={searchItem}>검색</button>
				<hr/>
				<div className='Comments-container'>
					<h2>게시물 검색</h2>
					<div id="Comments">
						<span>게시물 작성자 : </span><span id="get_name"></span><br/>
						<span>게시물 제목 : </span><span id="get_title"></span><br/>
						<span>게시물 작성 시간 : </span><span id="get_time"></span><br/>
						<span>게시물 내용 : </span><span id="get_content"></span><br/>
						<span>댓글 작성자: </span><input id="comment_user"></input><br/>
						
						<span>댓글 내용: </span><input id="comment_content"></input><br/>
						<button className="submit-button" onClick={write_comment_Item}>댓글달기</button>
						<hr/>
						<table id="user_list">
							<thead>
								<tr>
									<th>게시물 ID</th>
									<th>게시물 작성자</th>
									<th>게시물 제목</th>
									<th>게시물 작성시간</th>
									<th>게시물 내용</th>
									<th>댓글 달기</th>
								</tr>
							</thead>
							<tbody id="result_search">
								{post_map.map((p, i) => <tr key={i}>
									<td id = 'pic_write_id'>{p.write_id}</td>
									<td id = 'pic_write_user'>{p.write_user}</td>
									<td id = 'pic_write_title'>{p.write_title}</td>
									<td id = 'pic_write_date'>{p.write_date}</td>
									<td>
											{p.write_content}
									</td>
								  	<td>
									<button onClick={function () {
										console.log(i);
										pic_title(i);
										// console.log(p.write_id-1)
														 
									}}>댓글 달기</button>
												  </td>
								</tr>)
								}
							</tbody>
						</table>
						<h2>게시물 댓글 목록</h2>
						<table id="comment_list">
							<thead>
								<tr>
									<th>댓글 ID</th>
									<th>댓글 작성자</th>
									<th>게시물 ID</th>
									<th>댓글 작성시간</th>
									<th>댓글 내용</th>
									<th>기능</th>
								</tr>
							</thead>
							<tbody id="result_search">
								{comment_map.map((p, i) => <tr key={i}>
									<td id = 'pic_write_id'>{p.Comment_id}</td>
									<td id = 'pic_write_user'>{p.Comment_user}</td>
									<td id = 'pic_write_title'>{p.Comment_write}</td>
									<td id = 'pic_write_date'>{p.Comment_date}</td>
									<td>
											{p.Comment_content}
									</td>
								 	<td>
									<button onClick={function () {
										console.log(i)
										// document.getElementById("result_search").deleteRow((p.write_id-1))
												console.log(i)
												console.log(p.Comment_id)
														  delItem(p.Comment_id)
										// pic_title(i);
										// console.log(p.write_id-1)
														 
									}}>삭제</button>
								  <button onClick={function () {
										console.log(i);
										// document.getElementById("result_search").deleteRow((p.write_id-1))
												
												edit_num=p.Comment_id;
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
					<span >댓글 작성자 : </span>
					<input id="user-editinput" type='text' placeholder='작성자를 적어주세요' /><br/>
					
					<span > 댓글 내용 : </span>
					<input id="content-editinput" type='text' placeholder='내용을 적어주세요' />
					</div>
						<button className="submit-button" onClick={function () {editItem(edit_num)}}>댓글 내용 수정</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Comments;