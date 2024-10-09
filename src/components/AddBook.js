import React from "react";
import "../styles/addbookform.css"
import PropTypes from "prop-types";
import upload from "../pics/upload.svg";

export default class AddBook extends React.Component {

    static propsType = {
        addNewBookHandler: PropTypes.func
    };

    addNewBook = () => {
        const form = document.querySelector('.addBookForm');
        if (!form.reportValidity()) {
            const nameInput = document.getElementById("name");
            const authInput = document.getElementById("auth");
            const typeInput = document.getElementById("type");
            const pictInput = document.getElementById("pict");
    
            nameInput.setCustomValidity(nameInput.validity.valueMissing ? "Please enter the book name" : "");
            authInput.setCustomValidity(authInput.validity.valueMissing ? "Please enter the author" : "");
            typeInput.setCustomValidity(typeInput.validity.valueMissing ? "Please enter the book type" : "");
            pictInput.setCustomValidity(pictInput.validity.valueMissing ? "Please enter the book image" : "");
    
            return;
        }
        const newBook = [document.getElementById("name").value, document.getElementById("auth").value, document.getElementById("type").value]
        this.props.addNewBookHandler(newBook);
    }

    render() {
        return (
            <form className="addBookForm" noValidate>
                <div className="infoInput">
                    <label>Tên sách: </label>
                    <input id="name" type="text" required></input>
                </div>
                <div className="infoInput">
                    <label>Tác giả: </label>
                    <input id="auth" type="text" required></input>
                </div>
                <div className="infoInput">
                    <label>Thể loại: </label>
                    <input id="type" type="text" required></input>
                </div>
                <div className="picInput">
                    <label>Ảnh: </label>
                    <div className="picUp">
                        <img src={upload}></img>
                        Tải ảnh lên
                    </div>
                </div>
                <div className="submit" onClick={this.addNewBook}>Thêm sách</div>
            </form>
        )
    }
}