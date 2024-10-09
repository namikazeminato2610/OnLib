import React from "react";
import "../styles/header.css";
import logo from "../pics/verlog.png";
import org from "../pics/verlog.png";

export default function Header(props) {
    const [showCard, setShowCard] = React.useState(false);

    function wannaLog(e) {
      setShowCard(!showCard);
    }

    return (
        <div id="header" className="header">
            <img src={logo} alt="CLB" className="logo" onClick={props.onLogoClick}></img>
            <img src={org} alt="Org" className="pfp" onClick={wannaLog}></img>
            <div id="cardInfo" className={showCard ? "show" : "hide"}>
                <img src={props.orgaPic} alt="Org" className={showCard ? 'show' : 'hide'}></img>
                <div id="nameLogOut" className={showCard ? 'show' : 'hide'}>
                    <h1 className="nameInfo">{props.orgaName}</h1>
                    <h1 className="logout">Đăng xuất</h1>
                </div>
            </div>
        </div>
    )

}