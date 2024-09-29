import React from "react";
import "../styles/index.css";
import del from "../pics/delete.svg";

export default function BookList(props) {
    const [bookArr, setBookArr] = React.useState(props.books);

    React.useEffect(() => {
        addData();
        setBookArr(props.books);
    }, [props.books]);

    function addData() {
        let tab = document.getElementById("bookTable");
        let tb = tab.getElementsByTagName("tbody")[0];
        while (tb.rows.length > 0) {
            tb.deleteRow(0);
        }
        for (let i = 0; i < bookArr.length; i++) {
            let row = tb.insertRow(i);
            let c1 = row.insertCell(0);
            c1.innerHTML = bookArr[i][0];
            let c2 = row.insertCell(1);
            c2.innerHTML = bookArr[i][1];
            let c3 = row.insertCell(2);
            c3.innerHTML = bookArr[i][2];
            let c4 = row.insertCell(3);
            const img = document.createElement('img');
            img.src = del;
            c4.appendChild(img);
            c4.onclick = function () {
                let rowInd = this.parentNode.rowIndex - 1;
                tb.deleteRow(rowInd);
                props.books.splice(rowInd, 1);
            };
        }
    }

    return (
        <>
            <div className="addBook" onClick={props.onABClick}>Thêm sách</div>
            <div className="bookList">
                <table id="bookTable">
                    <thead>
                        <tr>
                            <th style={{ width: '24vw' }}>Tên sách</th>
                            <th style={{ width: '24vw' }}>Tác giả</th>
                            <th style={{ width: '24vw' }}>Thể loại</th>
                            <th style={{ width: '8vw' }}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </>
    )

}