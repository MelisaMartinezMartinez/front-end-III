import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";


const Form = () => {
    const [user, setUser] = useState({
        nameUser: "",
        lastNameUser: "",
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const handleChange = (e, prop) => {
        setUser({ ...user, [prop]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameUserIsValid = user.nameUser.length > 2;
        // const nameUserNoSpaces = user.nameUser.trim(nameUser);
        const lastNameUserIsValid = user.lastNameUser.length > 5;

        if (!nameUserIsValid || !lastNameUserIsValid) {
            setError(true);

            if (!nameUserIsValid && !lastNameUserIsValid) {
                setErrorMessage("Ups! Creo que no has escrito bien tu nombre y apellido");
            } else if (!nameUserIsValid) {
                setErrorMessage("Oh Oh! Creo que no has escrito bien tu nombre")
            } else {
                setErrorMessage("Chanfle! Creo que no has escrito bien tu apellido")
            }

            return;
        }

        setIsLogged(true)
    }


  return (
    <div className='container'>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Escribe tu nombre y apellido</h1>
            <input type="text"
                name="nameUser"
                placeholder="Ingresa tu nombre"
                onChange={(e) => handleChange(e, "nameUser")}
            />

            {error && errorMessage.includes("no has escrito bien tu nombre") && (
                <span style={{color: "pink", fontSize: "0.5rem"}}>
                    {errorMessage}
                </span>
            )}

            {/* {error && errorMessage.includes("Tienes espacios") && (
                <span style={{color: "pink", fontSize: "0.5rem"}}>
                    {errorMessage}
                </span>
            )} */}

            <input type="text"
                name="lastNameUser"
                placeholder="Ingresa tu apellido"
                onChange={(e) => handleChange(e, "lastNameUser")}
            />

            {error && errorMessage.includes("no has escrito bien tu apellido") && (
                <span style={{color: "pink", fontSize: "0.5rem"}}>
                    {errorMessage}
                </span>
            )}

            <button type="submit">Enviar</button>
        </form>

        {isLogged && (
            <Card nameUser={user.nameUser} lastNameUser={user.lastNameUser} />
        )}

    </div>
  )
}

export default Form