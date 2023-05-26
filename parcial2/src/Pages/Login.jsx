import React, { useState } from "react";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password.length < 6)
        throw new Error("La contraseña debe tener 6 caracteres minimo");

      const res = await axios.post("http://localhost:2000/login", {
        email: username,
        password,
      });

      alert(JSON.stringify(res.data));
      localStorage.setItem("rol", res.data.rol);

      navigate("/books");
    } catch (err) {
      setErr("Error al iniciar sesion");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black text-gray-700">
      <div className="flex w-[700px] h-[550px]">
        <div className="flex flex-col justify-evenly items-center bg-white h-full">
          <img
            className="h-[350px] object-cover"
            src="https://img.freepik.com/vector-gratis/ilustracion-pila-libros-diseno-plano-dibujado-mano_23-2149341898.jpg?w=2000"
            alt="no se encuentra"
          />
          <h1 className="text-black text-2xl bg-white text-center ">
            <FormattedMessage id="Books" />
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white  p-12  justify-center"
          action=""
        >
          <h1 className="text-black text-2xl text-center ">
            <FormattedMessage id="Books1" />
          </h1>
          <label className="font-semibold text-xs" for="usernameField">
            <FormattedMessage id="User" />
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="email"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="font-semibold text-xs mt-3" for="passwordField">
            <FormattedMessage id="Password" />
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            to="/books"
            className="flex items-center justify-center h-12 px-6 w-64 bg-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-orange-500"
            type="submit"
          >
            <FormattedMessage id="Button" />
          </button>
          {err && <p className="text-red-500">{err}</p>}
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
