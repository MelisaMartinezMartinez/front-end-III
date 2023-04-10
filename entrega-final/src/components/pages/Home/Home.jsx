import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalContext'
import "./Home.css"

const Home = () => {
    const {state} = useContext(GlobalContext);


  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
        <h1>Home</h1>
        <Link to="/dentistas">Ir a profesionales</Link>
    </div>
  )
}

export default Home