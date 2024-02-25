import bookImg from "../assets/book.png";
import { useState } from "react";
import BookData from "./BookData";
import BookSearch from "./BookSearch";
import BookSort from "./BookSort";

export default function BookSection() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Crash Python",
      img: bookImg,
      author: "Eric Matthes",
      price: 25,
      rating: 4,
      publish_year: 2015,
      isFavorite: false,
    },
    {
      id: 2,
      title: "JavaScript Zero to Hero",
      img: bookImg,
      author: "Douglas Crockford",
      price: 30,
      rating: 4,
      publish_year: 2018,
      isFavorite: false,
    },
    {
      id: 3,
      title: "Java: A Beginner's Guide",
      img: bookImg,
      author: "Herbert Schildt",
      price: 28,
      rating: 4,
      publish_year: 2014,
      isFavorite: false,
    },
    {
      id: 4,
      title: "C Programming",
      img: bookImg,
      author: "Greg Perry, Dean Miller",
      price: 20,
      rating: 4,
      publish_year: 2013,
      isFavorite: false,
    },
    {
      id: 5,
      title: "Learning PHP & JavaScript",
      img: bookImg,
      author: "Robin Nixon",
      price: 22,
      rating: 4,
      publish_year: 2014,
      isFavorite: false,
    },
    {
      id: 6,
      title: "Ruby on Rails Tutorial",
      img: bookImg,
      author: "Michael Hartl",
      price: 26,
      rating: 4,
      publish_year: 2022,
      isFavorite: false,
    },
    {
      id: 7,
      title: "Design and Build Websites",
      img: bookImg,
      author: "Jon Duckett",
      price: 24,
      rating: 3,
      publish_year: 2021,
      isFavorite: false,
    },
    {
      id: 8,
      title: "Javascript And Jquery",
      img: bookImg,
      author: "Cay S. Horstmann",
      price: 32,
      rating: 4,
      publish_year: 2012,
      isFavorite: false,
    },
  ]);
  const [searched, setSearched] = useState(false);

  // favorite function handler
  function handleFavorite(bookId) {
    const bookIndex = books.findIndex((book) => book.id === bookId);

    const favBooks = [...books];
    // toggle favorite
    // if value is true make false
    // else make true
    favBooks[bookIndex].isFavorite = !favBooks[bookIndex].isFavorite;
    setBooks(favBooks);
  }

  // search function handler
  function handleSearch(searchValue) {
    if (!searched) {
      let filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setBooks(filteredBooks);

      // stop search for second time on the matched results
      setSearched(true);
    }
  }

  // sort function handler
  function handleSort(e) {
    const sortBy = e.target.value;
    let sortedBooks = [...books];

    switch (sortBy) {
      case "name_asc":
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name_desc":
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "year_asc":
        sortedBooks.sort((a, b) => a.publish_year - b.publish_year);
        break;
      case "year_desc":
        sortedBooks.sort((a, b) => b.publish_year - a.publish_year);
        break;
      default:
        break;
    }

    setBooks(sortedBooks);
  }

  return (
    <div className="max-w-screen-xl mx-auto py-14">
      {/* product header */}
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>

          <BookSearch onSearch={handleSearch} />
        </div>
        <BookSort onSort={handleSort} />
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10">
        {books.map((book) => (
          <BookData book={book} key={book.id} onFavorite={handleFavorite} />
        ))}
      </div>
    </div>
  );
}
