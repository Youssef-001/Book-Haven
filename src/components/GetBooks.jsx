import { useEffect } from "react";
const API_KEY = "AIzaSyBdakqptVcy0KOcQZ4pnp0vO6ME1DU54YI";

function getRandomNumber() {
  const min = 19;
  const max = 35;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function useBooks(filter, setLoading, setBooks) {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${filter}&orderBy=relevance&maxResults=40&key=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await res.json();

      setBooks(data.items);
      setLoading(false);
      data.items.forEach((vol) => {
        let title = vol.volumeInfo.title;
        if (!localStorage.getItem(title)) {
          localStorage.setItem(
            title,
            JSON.stringify({
              price: getRandomNumber(),
              quantity: 1,
            })
          );
        }
      });
    };
    fetchData().catch((error) => {
      console.error("Fetching data failed:", error);
      // setBooks({ error: "Error fetching data" }); // Set an error state
    });
  }, [filter, setBooks, setLoading]);
}

export default useBooks;
