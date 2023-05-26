import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import Cards from "../Components/Cards";


function LandingPage() {
  const [libros, setLibros] = useState([]);
  const token = sessionStorage.getItem('jwtToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    const getlibros = async () => {
      if (navigator.onLine){ 
        const url = "http://localhost:2000/books";
        await axios
          .get(url)
          .then((res) => {
            setLibros(res.data);
            localStorage.setItem("libros", JSON.stringify(res.data))
          })
          .catch((err) => {
            alert("Error " + JSON.stringify(err));
          });

      }
      else {
        if(localStorage.getItem("libros")) {
          setLibros(JSON.parse(localStorage.getItem("libros")));
      }

      }
    };
  
    getlibros();
    }, []);

    return (
      <div className="p-4 sm:p-8">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-semibold mb-4">
            <FormattedMessage id="Booktitle"/>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {libros.map((book) => (
              <Cards
                link={book.id.toString()}
                img={book.image}
                title={book.name}
                titleColor="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500"
                iconColor="text-blue-700"
                update={book.isbn}
                styles="bg-neutral-50"
              />
            ))}
   
          </div>
        </div>
      </div>
    );
}

export default LandingPage;
