import { Switch } from '@mui/material';
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalContext'

const Navbar = () => {

  const {state, dispatch} = useContext(GlobalContext);

  const handleChange = () => {
    dispatch({type: "SWITCH_MODE"});
  };

  return (
    <div>
        <h2>Navbar</h2>

        <div>
        <h3>Cambia el tema de la Pagina</h3>
        <Switch
        checked={state.isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}/>
        </div>

        <Link to="/favs"> Ir a favoritos</Link>

        <div style={{minHeight: "80vh"}}>
          <Outlet />
        </div>
    </div>
  );
};

export default Navbar