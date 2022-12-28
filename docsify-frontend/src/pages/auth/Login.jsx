import React, { useState } from 'react'
import './auth.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Lottie from 'react-lottie';
import animationData from "../../assets/login.json"

export default function Login(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const { env } = props;
    const [visibility, setVisibility] = useState(1);
    const handleVisibility = (idx) => {
        setVisibility(old => !old)
    }

    return (
        <div className="logScreen">
            <div className="leftDisplay">
                <Lottie
                    options={defaultOptions}
                    height={1000}
                    width={800}
                />
            </div>

            <div className="rightDisplay">
                <div className="login">
                    <div className="authBox email">
                        <div className="authBoxLabel emailLabel">Email</div>
                        <input type="email" name="emailContainer" className='authBoxContainer emailContainer' placeholder='Enter your email' />
                    </div>
                    <div className="authBox password">
                        <div className="authBoxLabel passwordLabel">Password</div>
                        <div className="psdBoxLog" >
                            {visibility ?
                                <input type="password" name="passwordContainer" className='authBoxContainer passwordContainer' placeholder='Enter your password' />
                                : <input type="text" name="passwordContainer" className='authBoxContainer passwordContainer' placeholder='Enter your password' />
                            }

                            <div className="view" onClick={handleVisibility}>
                                {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='submit'>
                        LOGIN
                    </button>
                    <div className="forgotBtn">
                        <span>
                            Forgot Password?
                        </span>
                    </div>
                    <div className="registerBtn">
                        <span>
                            Not a registred User?
                        </span>
                    </div>
                    {/* <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_KvK0ZJBQzu.json" mode="bounce" background="transparent" speed="0.95" style="width: 700px; height: 700px;" loop autoplay></lottie-player> */}
                </div>
            </div>
        </div>
    )
}
