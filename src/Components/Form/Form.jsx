import { useState } from "react"


const Form = () => {

    const [data, setData] = useState ({
        name: "",
        age: "",
        pokemon: "",
    })

    const handleChangeName = (event) => {
        setData({...data, name: event.target.value})
    }

    const handleChangeAge = (event) => {
        setData({...data, age: event.target.value})
    }

    const handleChangePokemon = (event) => {
        setData({...data, pokemon: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Hola ${name} tu edad es ${age} y tu pokem favorita es ${pokemon}, bienvenido(a!)`)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="userName"
            onChange={handleChangeName}/>

            <input 
            type="text"
            age="userAge"
            onChange={handleChangeAge} />

            <input 
            type="text"
            pokemon="userPokemon"
            onChange={handleChangePokemon} />

            <button type="submit">Ingresar</button>

        </form>
    </div>
  )
}

export default Form