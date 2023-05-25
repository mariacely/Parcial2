import axios from "axios";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = e.target.elements;

    try {
      const response = await axios.post(
        "http://localhost:2000/login",
        {
          username: username.value,
          password: password.value,
        }
      );

      const token = response.data.token;
      sessionStorage.setItem("jwtToken", token);
      setLoginStatus("Success");
    } catch (error) {
      setLoginStatus("Error");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black text-gray-700">
        <div >
        <img className ="h-{10px}" src="https://img.freepik.com/vector-gratis/ilustracion-pila-libros-diseno-plano-dibujado-mano_23-2149341898.jpg?w=2000" alt="no se encuentra" />
        </div>
    <form onSubmit={handleSubmit} className="flex flex-col bg-white shadow-lg p-12 mt-2" action="">
      <label className="font-semibold text-xs" for="usernameField">
      <FormattedMessage id="User"/>
      </label>
      <input
        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        type="text" name="username" placeholder="Username"
      />
      <label className="font-semibold text-xs mt-3" for="passwordField">
      <FormattedMessage id="Password"/>
      </label>
      <input
        className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        type="password" name="password" placeholder="Password"
      />
      <button 
        className="flex items-center justify-center h-12 px-6 w-64 bg-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-orange-500"
        type= "submit">
      <FormattedMessage id="Button"/>
      </button>
      {loginStatus && (
          <p style = {{paddingTop: '20px', justifyContent: 'center', display: 'flex', color: 'red'}}>{loginStatus === "Success" ? navigate(`/home`) : <FormattedMessage id='LoginFailed'/>}</p>
      )}
    </form>
  </div>
  );
}
export default LoginPage;
