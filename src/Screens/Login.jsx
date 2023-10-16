import React from 'react'

function Login(props) {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Login</h1>
            </div>
        <div className="form-container">
         <form>
            <div className='fgroup'>
                <label htmlFor="user">Username</label>
                <input type="text" name='user' id='user' required />
            </div>

            <div className="fgroup">
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" id="pass" required />
            </div>

            <div className="fgroup">
                <input type="submit" value="Login" className='btn' />
                <button onClick={props.handler} >New User?</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Login