import React, { useState } from "react"
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
    }

    return (
        <div className="login-container">
            <img className="vipsCampus" src="./vips-campus.jpg" alt="vips campus" />
            <Link ></Link>
            <div className="login-form">
                <img className="vipsLogo" src="./vips-logo-lw.png" alt="vips logo" />
                <form action="" method="post">
                    <label htmlFor="email"> Email: 
                        <input type="email" name="email" id="email" required autoComplete="off" placeholder="Email" />
                    </label>
                    <br />
                    <label htmlFor="password"> Password: 
                        <div className="password-input-feild">
                        <input
                            type={type}
                            name="password"
                            placeholder="Password (min 8 Character)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            minLength={8}
                            maxLength={16}
                            required
                            autoComplete="off"
                        />
                        <span onClick={handleToggle} className="eye-icon">
                            <Icon icon={icon} size={20}/>
                        </span>
                        </div>
                    </label>
                    <button type="submit">Login</button>
                    <Link to={'/'}><button>Back</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login