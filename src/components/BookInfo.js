import React from "react";
import testImg from "../pics/verlog.png";
import "../styles/bookinfo.css";

export default function BookInfo(props) {
    let index = props.ind;
    console.log(props);
    console.log(index);

    return (
        <div className="book-info">
            <img src={testImg} alt="Test"></img>
            <div className="info">
                <h2 className="name">{props.books[index][0]}</h2>
                <h2>Tác giả: {props.books[index][1]}</h2>
                <h2>Thể loại: {props.books[index][2]}</h2>
            </div>
            <div className="borTab"></div>
        </div>
    );
}