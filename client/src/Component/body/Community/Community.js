import React from 'react'
// import axios from 'axios';
import './Community.css';

//useState가 반환을 할떄 array로 반환하는데 첫번째에는 mahjong, 두번째는 setmahjong가 반환
const Community = () => {
	return (
		<div className='CommunityWrap'>
			<div className='CommunityPage'>
				<h1>Movie Review</h1>
			<div className='Community-container'>
				<h2>제목</h2>
				<div>
					내용
				</div>
			</div>
			<div className='form-wrapper'>
				<input className="title-input" type='text' placeholder='제목' />
				<textarea className="text-area" placeholder='내용'></textarea>
			</div>
			<button className="submit-button">입력</button>
			</div>
			
		</div>
	)
}
export default Community;