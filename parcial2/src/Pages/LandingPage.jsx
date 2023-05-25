import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormattedMessage } from "react-intl";


function LandingPage() {
  const [algo, setAlgo] = useState([]);
  const token = sessionStorage.getItem('jwtToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    const getloquequiero = async () => {
      if (navigator.onLine){ 
        alert("Estoy en linea")
        const url = "http://localhost:3000";
        await axios
          .get(url)
          .then((res) => {
            setAlgo(res.data);
            localStorage.setItem("foros", JSON.stringify(res.data))
          })
          .catch((err) => {
            alert("Error " + JSON.stringify(err));
          });

      }
      else {
        if(localStorage.getItem("foros")) {
          setAlgo(JSON.parse(localStorage.getItem("foros")));
      }

      }
    };
  
    getloquequiero();
    }, []);

  return (
    <div>

    </div>
  );
}

export default LandingPage;
