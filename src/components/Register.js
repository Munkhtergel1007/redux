import '../style.css';
import { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewUser } from '../ACTION/userActions'


const Register = () => {
    const dispatch = useDispatch();
    const [email, setGmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const newUserHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            username: username,
            password: password
        }
        console.log(userData)
        dispatch(getNewUser(userData))
    }

    return <Fragment>
        <div className="hero h-screen w-screen flex justify-center items-center flex-col">
            <form className="w-1/5 flex flex-col" onSubmit={newUserHandler}>
                <label htmlFor="gmail">Gmail</label>
                <input id="gmail" placeholder="Gmail" className="mb-2" onChange={e => setGmail(e.target.value)} />
                <label htmlFor="Username">Username</label>
                <input id="Username" placeholder="Username" className="mb-2" onChange={e => setUsername(e.target.value)} />
                <label htmlFor="password" >password</label>
                <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button className="bg-red-300 mt-2">Register</button>
            </form>
        </div>
    </Fragment>

}

export default Register