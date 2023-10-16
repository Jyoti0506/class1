import React from 'react'

function Register(props) {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Register</h1>
            </div>
        <div className="form-container">
         <form>
                <div className='fgroup'>
                        <label htmlFor="name">Full name</label>
                        <input type="text" name="name" id="name" required />
                </div>

                <div className='fgroup'>
                     <label htmlFor="user">Username</label>
                    <input type="text" name='user' id='user' required />
                </div>

                <div className="fgroup">
                    <label htmlFor="pass">Password</label>
                     <input type="password" name="pass" id="pass" required />
                </div>

                <div className="fgroup">
                    <input type="submit" value="Register" className='btn' />
                </div>
            </form>
        </div>
    </div>
    )
}

export default Register