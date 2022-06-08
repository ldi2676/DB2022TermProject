import React from "react";
import './Header.css'
import Han from '../body/Han.js'

class Header extends React.Component {
    render() {
        return (
            <div className="HeaderWrap">
                <div className="menuBar">
					<header>
                    	<h1>20170786 이동익 MahjongDB</h1>
					</header>
					<nav>
						<span><a href ="/">마작 역 정보</a></span>
						<span><a href ="./Han">역 정보 DB 테이블</a></span>
						<span><a href ="/">역 이미지 DB 테이블</a></span>
						<span><a href ="/">역 설명 DB 테이블</a></span>
						<span><a href ="/">게시판</a></span>
					</nav>
                </div>
            </div>
        );
    }
}

export default Header