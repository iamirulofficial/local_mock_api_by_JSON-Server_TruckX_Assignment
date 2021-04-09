import NavBarMenu from './NavBarMenu';
import { useState } from 'react'

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');

    const login = () => {
        try {
            fetch("http://localhost:3000/login?q=" + username).then((data) => {
                data.json().then((resp) => {
                    //console.warn("resp", resp)
                    if (resp[0].password === password) {
                        localStorage.setItem('login',JSON.stringify(resp))
                        console.warn(props.history.push('list'))
                    }
                    else {
                        alert("Pelase check username and password")
                    }
    
                })
            })
        } catch (err) {
            console.log(err);
        }

    }

    const handelUsermail = event => {
        setUsername(event.target.value);
    };

    const handelPassword = event => {
        setPass(event.target.value);
    };

    return (
        <div>
            <NavBarMenu />
            <h1>Login</h1>
            <input type='text' name="email" onChange={handelUsermail} placeholder='email' /> <br /> <br />
            <input type='password' name='password' onChange={handelPassword} placeholder='password' /> <br /> <br />
            <button onClick={() => login()}>Login</button>

        </div>
    );
}

export default Login;