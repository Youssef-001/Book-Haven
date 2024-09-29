import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import Books from "./Books";
const API_KEY = "AIzaSyBdakqptVcy0KOcQZ4pnp0vO6ME1DU54YI";
function Main() {
  let [filter, setFilter] = useState("fiction");
  let [books, setBooks] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${filter}&orderBy=relevance&maxResults=40&key=${API_KEY}`
      );

      let data = await res.json();

      setBooks(data.items);
    };
    fetchData();
  }, [filter]);

  if (books != "") return <Books books={books} />;
}

export default Main;
