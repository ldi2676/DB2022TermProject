import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
				<footer>
					<span className="Footer_title">데이터베이스</span>
					<span> &copy; 2022. 금오공과대학교 컴퓨터공학과 20170786 이동익</span>
				</footer>
            </div>
        );
    }
}

export default Footer