import React, { useState } from 'react'
import "./Contacto.css";

const Contacto = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = user.email.includes("@");
    const passwordIsValid = user.password.length > 3;

    if (!emailIsValid || !passwordIsValid) {
      // rechazo el envio
      setError(true);

      if (!emailIsValid && !passwordIsValid) {
        setErrorMessage("el email es incorrecto y la contraseña es incorrecta");
      } else if (!emailIsValid) {
        setErrorMessage("el email es incorrecto");
      } else {
        setErrorMessage("la contraseña es incorrecta");
      }
      return;
    }
};

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Contactanos</h3>
        <input
          type="text"
          name="email"
          placeholder='Ingrese su email'
          onChange={(e) => handleChange(e, "email")}
        />

        {error && errorMessage.includes("el email es incorrecto") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <input
          type="text"
          name="password"
          placeholder='Ingrese su contraseña'
          onChange={(e) => handleChange(e, "password")}
        />

        {error && errorMessage.includes("la contraseña es incorrecta") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Contacto