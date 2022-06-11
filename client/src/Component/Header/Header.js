import React from "react";
import './Header.css'
// import Han from '../body/Han.js'
// import YakuDecs from '../body/YakuDecs.js'
// import YakuImage from '../body/YakuImage.js'
// import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div className="HeaderWrap">
				<div className="menuBar">
					{/* <header>
						<h1>20170786 이동익 MahjongDB</h1>
					</header>
					<nav>
						<span><Link to="/">마작 역 정보</Link></span>
						<span><Link to="/Han">역 정보 DB 테이블</Link></span>
						<span><Link to="/YakuImage">역 이미지 DB 테이블</Link></span>
						<span><Link to="/YakuDecs">역 설명 DB 테이블</Link></span>
						<span><Link to="/Community">게시판</Link></span>
					</nav> */}
				</div>
			</div>
		);
	}
}

export default Header