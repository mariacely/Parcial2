import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Datail from "../Components/Datail";
import axios from "axios";

function DetailPage() {
  const { bookid } = useParams();
  console.log(bookid)

  const [comments, setComments] = useState([]);
  const token = sessionStorage.getItem('jwtToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    const getdatails = async () => {
      if (navigator.onLine){ 
      const url = `http://localhost:2000/books/${bookid}`;
      await axios
        .get(url)
        .then((res) => {
          setComments(res.data);
          localStorage.setItem("books"+bookid, JSON.stringify(res.data))
        })
        .catch((err) => {
          alert("Error " + JSON.stringify(err));
        });
    }
    else {
      if(localStorage.getItem("books"+bookid)) {
        setComments(JSON.parse(localStorage.getItem("books"+bookid)));
    }

    }};

    getdatails();
  }, [bookid]);
  

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col">
        <h1 className="text-white text-2xl font-semibold mb-4">
          detalle 
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {comments.map((detail) => (
            <Datail
              title={detail.id}
              author={detail.author}
              publisher={detail.publisher}
              year={detail.year}
              styles="bg-neutral-50"
              description={detail.summary}
              Price={detail.price}
              Genre={detail.gender}
              availeble={detail.available_online}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
