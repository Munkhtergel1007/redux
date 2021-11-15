import '../style.css';
import { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../ACTION/userActions'


const Login = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.userReducers);
    const [email, setGmail] = useState('')
    const [password, setPassword] = useState('')

    if (data.id.id) {
        window.location.href = `/user/{data.id.id}`
    }

    const newUserHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        console.log(userData)
        dispatch(loginUser(userData))
    }

    return <Fragment>
        <div className="hero h-screen w-screen flex justify-center items-center flex-col">
            <form className="w-1/5 flex flex-col" onSubmit={newUserHandler}>
                <label htmlFor="gmail">Gmail</label>
                <input id="gmail" placeholder="Gmail" className="mb-2" onChange={e => setGmail(e.target.value)} />
                <label htmlFor="password" >password</label>
                <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button className="bg-red-300 mt-2">Login</button>
            </form>
        </div>
    </Fragment>

}

export default Login