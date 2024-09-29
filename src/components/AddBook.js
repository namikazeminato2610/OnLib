import React from "react";
import "../styles/index.css"

export default function AddBook(props) {
    function newBook() {
        const newBook = [document.getElementById("name").value, document.getElementById("auth").value, document.getElementById("type").value]
        props.books.push(newBook);
        console.log(props.books);
    }

    return (
        <div className="addBookForm">
            <div className="infoInput">
                <label>Tên sách: </label>
                <input id="name" type="text"></input>
            </div>
            <div className="infoInput">
                <label>Tác giả: </label>
                <input id="auth" type="text"></input>
            </div>
            <div className="infoInput">
                <label>Thể loại: </label>
                <input id="type" type="text"></input>
            </div>
            <div className="infoInput">
                <label>Ảnh: </label>
                <input id="pict" type="text"></input>
            </div>
            <div className="submit" onClick={newBook}>Thêm sách</div>
        </div>
    )
}