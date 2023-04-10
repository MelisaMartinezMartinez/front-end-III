import axios from 'axios'
import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import Professional from './Professional'

const ProfessionalsContainer = () => {

    const {state, dispatch} = useContext(GlobalContext)

    useEffect(()=>{

        const getProfessionals = axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        getProfessionals
          .then((res) => dispatch({type: "GET_USERS", payload: res.data}))
          .catch((err) => console.log(err));

    }, [])

    console.log(state.professionals);

  return (
    <div>
        <Professional professionals={state.professionals} dispatch={dispatch} favs={state.favs}/>
    </div>
  )
}

export default ProfessionalsContainer