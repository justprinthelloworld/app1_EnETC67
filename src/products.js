import React from "react";
import './products.css'

export default class Products extends React.Component
{
    // เอา array มาสร้างเป็นตาราง
    data = [
        ['React', 500], // d รอบ 1 index 0 คือ ข้อความ 1 คือราคา
        ['React Native', 650], // d รอบ 2
        ['Node.js', 450], // d รอบ 3
        ['MongoDB', 300], // d รอบ 4
        ['Express.js', 650] // d รอบ 5
    ]
    render() {
        return (
            <table border="1">
                <tr><th>ชื่อ</th><th>ราคา</th></tr>
                {
                    // .map วน ตาม data 5 รอบ
                    this.data.map(d => {
                        return <tr><td>{d[0]}</td><td>{d[1]}</td></tr>
                    })
                }
            </table>
        )
    }
}