import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

const App = () => {
    return (
        <div className="app">
            {/* <Home /> */}
            <Login env="Patient" />
            {/* <Register env="Patient" /> */}
        </div>
    )
}

export default App