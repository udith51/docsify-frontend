import React from 'react'
import HomeMain from '../../components/topbar/HomeMain'
import Topbar from '../../components/topbar/Topbar'

const Home = () => {
    return (
        <div className="home">
            <Topbar />
            <HomeMain />
        </div>
    )
}

export default Home