import React,{useState,useEffect} from 'react'
import axios from 'axios';

const EXPRESS_URL = 'https://mahjongexpress20170786.run.goorm.io';
const AllComments= () => {
	const [comment_map, setcomment_map] = useState([]);
	 useEffect(() => {
    getmahjong()
  }, [])
	
	 const getmahjong = async() => { //awite를 사용하려면 async()를 써야함
    try {
      const res = await axios.get(EXPRESS_URL + '/Comments')
      //console.log(res)
      setcomment_map(res.data)
    } 
 	catch (err) {
      console.log(err)
    }
  }
	return(
		<div>
		<h2>게시물 댓글 목록</h2>
			<table id="comment_list">
				<thead>
					<tr>
						<th>댓글 ID</th>
						<th>댓글 작성자</th>
						<th>게시물 ID</th>
						<th>댓글 작성시간</th>
						<th>댓글 내용</th>
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
					</tr>)
					}
				</tbody>
			</table>
		</div>
	)
}
export default AllComments;