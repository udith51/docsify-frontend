import React, { useState } from 'react'
import './auth.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Lottie from 'react-lottie';
import animationData from "../../assets/signup.json"

export default function Register(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { env } = props;
    const [visibility, setVisibility] = useState([1, 1]);
    const handleVisibility = (idx) => {
        var arr = [1, 1];
        setVisibility(old => {
            for (var i = 0; i < 2; i++) {
                if (i !== idx) {
                    arr[i] = old[i];
                } else {
                    arr[i] = !old[i];
                }
            }
            return arr;
        })
    }

    return (
        <div className="regScreen">
            <div className="leftDisplay">
                <div className="register">

                    <div className="authBox name">
                        <div className="firstName">
                            <div className="authBoxLabel firstNameLabel">First Name</div>
                            <input type="text" placeholder='Enter first name' className='authBoxContainer firstNameContainer' />
                        </div>
                        <div className="lastName">
                            <div className="authBoxLabel lastNameLabel">Last Name</div>
                            <input type="text" placeholder='Enter last name' className='authBoxContainer lastNameContainer' />
                        </div>
                    </div>

                    <div className="authBox email">
                        <div className="authBoxLabel emailLabel">Email</div>
                        <input type="email" name="emailContainer" className='authBoxContainer emailContainer' placeholder='Enter your email' />
                    </div>

                    <div className="authBox env">
                        {env === "Doctor" ?
                            <div className="authDoc">
                                <div className="authBoxLabel">Enter unique Doctor ID</div>
                                <input type="text" name='udiContainer' className='authBoxContainer udiContainer' placeholder='Enter your Unique Doctor ID' />
                            </div>
                            :
                            <div className="authPat">
                                <div className="authBoxLabel">Enter UIDAI</div>
                                <input type="text" name='uidaiContainer' className='authBoxContainer uidaiContainer' placeholder='Enter your Unique Aadhar ID' />
                            </div>
                        }
                    </div>

                    <div className="authBox regPassword">
                        <div className="password1">
                            <div className="authBoxLabel passwordLabel">Password</div>
                            <div className="psdBox">
                                {visibility[0] ?
                                    <input type="password" name="regPasswordContainer"
                                        className='authBoxContainer regPasswordContainer' placeholder='Enter your password' />
                                    : <input type="text" name="regPasswordContainer"
                                        className='authBoxContainer regPasswordContainer' placeholder='Enter your password' />
                                }

                                <div className="view" onClick={() => handleVisibility(0)}>
                                    {visibility[0] ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </div>
                            </div>
                        </div>
                        <div className="password2">
                            <div className="authBoxLabel passwordLabel">Confirm Password</div>
                            <div className="psdBox" >
                                {visibility[1] ?
                                    <input type="password" name="re-passwordContainer" className='authBoxContainer regRe-passwordContainer' placeholder='Re-enter your password' />
                                    : <input type="text" name="re-passwordContainer" className='authBoxContainer regRe-passwordContainer' placeholder='Re-enter your password' />
                                }

                                <div className="view" onClick={() => handleVisibility(1)}>
                                    {visibility[1] ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className='submit'>
                        REGISTER
                    </button>

                    <div className="forgotBtn">
                        <span>
                            Forgot Password?
                        </span>
                    </div>

                    <div className="loginBtn">
                        <span>
                            Already a registred User? Sign In
                        </span>
                    </div>
                </div>
            </div>
            <div className="rightDisplay">

                <Lottie
                    options={defaultOptions}
                    height={800}
                    width={800}
                />
            </div>
        </div>
    )
}
