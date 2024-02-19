import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logincomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    // Después de la autenticación exitosa, redirige a la página de inicio
    navigate("/");
  }

  return (
    <div className="bg-teal-500 text-white rounded-md p-5 my-5 mt-20 mx-auto max-w-md">
      <h2 className="text-sm font-bold text-center mb-4">Inicio sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-xs font-semibold block mt-2 mb-1">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuemail@gmail.com" id="email" name="email" className="bg-white text-black rounded-md py-1 px-2 mb-2 w-full" required />
        <label htmlFor="password" className="text-xs font-semibold block mb-1">Contraseña</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" minLength="8" className="bg-white text-black rounded-md py-1 px-2 mb-2 w-full" required />
        <div className="text-center">
          <button className="bg-slate-300 px-2 py-1 text-black rounded-md" type="submit">Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default Logincomponent;
