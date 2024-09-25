import React from "react";
import "../styles/index.css";
import logo from "../pics/horlog.png";

export default function Header(props) {
    function responsive(e) {
        let head = document.getElementById("header");
        let change = document.getElementById("burg");
        if (head.className === "header") {
            head.className = "header responsive";
            change.className = "change open";
        } else {
            head.className = "header";
            change.className = "change";
        }
    }

    return (
        <div id="header" className="header">
            <img src={logo} alt="CLB"></img>
            <div className="choice"><h1>Danh sách</h1></div>
            <div className="choice bor"><h1>Mượn / trả</h1></div>
            <h1 className="logout">Đăng xuất</h1>
            <div id="burg" className="change" onClick={responsive}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    )

}