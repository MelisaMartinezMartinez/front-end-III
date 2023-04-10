import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalContext'
import ProfessionalSelected from "./ProfessionalSelected"

const ProfessionalSelectedContainer = () => {
  const { dispatch } = useContext(GlobalContext)
  const { id } = useParams()

  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data}))
  }, [])

  return (
    <ProfessionalSelected />
  )
}

export default ProfessionalSelectedContainer