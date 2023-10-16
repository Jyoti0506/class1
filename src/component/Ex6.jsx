import React, {userState} from 'react'
import Login from '../Screens/Login'
import Register from '../Screens/Register'

function Ex6(props) {
    const [view,setView] = userState(true)

    const viewHandler = () => {
        setView(!view)
    }

    return (
        <div>
            <h1>state value as boolean</h1>

            <section>
                    {
                        view ? <Login handler={viewHandler} /> : <Register handler={viewHandler} />
                    }
            </section>
        </div>
    )
}

export default Ex6
