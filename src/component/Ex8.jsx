import React, {useState} from 'react'

function Ex8(props) {
    const [qnty, setQnty] = useState(1)

    const inc = () => {
        setQnty(qnty + 1)
    }

    const dec = () => {
        if (qnty <= 1) {
            setQnty(1)
        } else {
            setQnty(qnty-1)
        }
    }

    return (
        <div>
            <h1>Quantity State</h1>
            <h4>Quantity= <span onClick={dec}>-</span> { qnty } <span onClick={inc}>+</span> </h4>
        </div>
    )
}

export default Ex8
