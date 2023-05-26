import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Datail from "../Components/Datail";
import axios from "axios";

function DetailPage() {
  const { bookid } = useParams();
  console.log(bookid)

  const [books, setBooks] = useState([]);
  const token = sessionStorage.getItem('jwtToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    const getdatails = async () => {
      if (navigator.onLine){ 
      const url = `http://localhost:2000/books/${bookid}`;
      await axios
        .get(url)
        .then((res) => {
          setBooks(res.data);
          localStorage.setItem("books"+bookid, JSON.stringify(res.data))
        })
        .catch((err) => {
          alert("Error " + JSON.stringify(err));
        });
    }
    else {
      if(localStorage.getItem("books"+bookid)) {
        setBooks(JSON.parse(localStorage.getItem("books"+bookid)));
    }

    }};

    getdatails();
  }, [bookid]);
  

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col">
        <h1 className="text-white text-2xl font-semibold mb-4">
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
            <Datail
              title={books.name}
              author={books.author}
              publisher={books.publisher}
              year={books.year}
              styles="bg-neutral-50"
              description={books.summary}
              isbn={books.isbn}
              Price={books.price}
              Genre={books.gender}
              available={books.available_online}
            />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
