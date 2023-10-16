import React from 'react'

function Ex5(props) {

    const [title, setTitle] = userState("welcome to react")

    const handleState = () => {
        setTitle("first string state")
    }

    const handleString = () => {
        setTitle("second string statement")
    }

    return (
        <div>
        <h3>State in functional component</h3>
        <p>state in p</p>
        </div>
    )
}