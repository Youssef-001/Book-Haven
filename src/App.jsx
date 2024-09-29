import Main from "./components/Main";
import styled from "styled-components";
import "./App.css";
// import { Sidebar } from "lucide-react";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import Books from "./components/Books";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
const API_KEY = "AIzaSyBdakqptVcy0KOcQZ4pnp0vO6ME1DU54YI";

let Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
`;

function App() {
  let [filter, setFilter] = useState("fiction");
  let [books, setBooks] = useState("");
  let [preview, setPreview] = useState("");

  function handlePreview() {}

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

  if (books != "")
    return (
      <>
        <Layout id="app">
          <Sidebar />
          <Nav setFilter={setFilter}></Nav>
          <Books setPreview={setPreview} books={books} />
          <Preview book={preview}></Preview>
        </Layout>
      </>
    );
}

export default App;
