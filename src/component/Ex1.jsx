import React from 'react'

let x =20
let y= 30

const title = "welcome to react"
const isView = false

const colors = ["red", "green", "blue", "yellow"]

const emp = {
    id:234,
    name:"jhon",
    email:"jhon@gmail.com",
    gender:"male",
    bank: {
        acc: 12345,
        branch: "city circle",
        title: "ICICI"
    }

}

function Ex1(props) {
    return (
        <div>
            <h1>Example - 1</h1>
            <h3>x = { x }</h3>
            <h3>y = { y } </h3>
            <h3>Product = { x * y} </h3>
            <hr />
            <h3> {title} </h3>
            <h3>boolean ={isView ? "say true": "say false"}</h3>

            <hr />

            <ol>
                {colors.map((item,index) => {
                    return (
                        <li key={index}> {item}</li>
                    )
                })}
            </ol>

            <hr />

            <h3> emp name = {emp.name}</h3>
        </div>
    )
}

export default Ex1