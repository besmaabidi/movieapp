import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MovieForm from "./components/MovieForm/MovieForm";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  const [filterText, setFilterText] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const data = [
    {
      id: Math.random(),
      title: "Deep Water",
      year: 2022,
      rate: 3,
      image:
        "https://www.faselhd.top/wp-content/uploads/2022/03/MV5BNTE1M2NjNDgtYjQ2Ny00YTMzLWJiYWQtMTdmM2Q2YjA1MDg1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_-scaled.jpg",
    },

    {
      id: Math.random(),
      title: "RIMA",
      year: 2020,
      rate: 4,
      image:
        "https://media.elcinema.com/uploads/_320x_e12fa74ef0e150bfeac202fb7f30b5f507d7d68415cdbfd95e1ca991cdae039d.jpg",
    },

    {
      id: Math.random(),
      title: "The Godfather",
      year: 1972,
      rate: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/714ZOEiVNtL._RI_.jpg",
    },

    {
      id: Math.random(),
      title: "Brothers",
      year: 2009,
      rate: 2,
      image:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/73/39/48/19210179.jpg",
    },

    {
      id: Math.random(),
      title: "No Exit",
      year: 2022,
      rate: 3,
      image:
        "https://media.elcinema.com/uploads/_315x420_e83aff433b4325f1584af214be6bccf52aaffd34d4912c03c81338afd94cf29b.jpg",
    },

    {
      id: Math.random(),
      title: "The Dark Knight",
      year: 2008,
      rate: 5,
      image:
        "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
    },

    {
      id: Math.random(),
      title: "Venom",
      year: 2018,
      rate: 4,
      image:
        "https://www.cdiscount.com/pdt2/8/7/0/1/700x700/auc8765306835870/rw/affiche-r-venom-movie-70-x-45-cm248.jpg",
    },

    {
      id: Math.random(),
      title: "Joker",
      year: 2019,
      rate: 4,
      image:
        "https://fr.web.img4.acsta.net/pictures/19/08/29/09/20/1546400.jpg",
    },

    {
      id: Math.random(),
      title: "Very Good Girl",
      year: 2013,
      rate: 1,
      image: "https://fr.web.img2.acsta.net/pictures/14/06/04/17/09/564038.jpg",
    },

    {
      id: Math.random(),
      title: "All The Bright Places",
      year: 2020,
      rate: 1,
      image:
        "https://fr.web.img5.acsta.net/pictures/20/02/07/09/27/1987472.jpg",
    },

    {
      id: Math.random(),
      title: "Logan",
      year: 2017,
      rate: 4,
      image:
        "https://i.etsystatic.com/16692478/r/il/bf5505/1396166962/il_fullxfull.1396166962_d8mw.jpg",
    },

    {
      id: Math.random(),
      title: "Fight Club",
      year: 1999,
      rate: 2,
      image:
        "https://fr.web.img6.acsta.net/img/23/b7/23b757ce995171ae05ba7449c67a47dc.jpg",
    },

    {
      id: Math.random(),
      title: "It",
      year: 2017,
      rate: 3,
      image:
        "https://static.fnac-static.com/multimedia/Images/29/29/89/A6/10914089-1505-1540-1/tsp20190131152406/IT-ca-Pennywise-40x50-cm-AFFICHE-POSTER.jpg",
    },

    {
      id: Math.random(),
      title: "Shutter Island",
      year: 2010,
      rate: 5,
      image: "https://m.media-amazon.com/images/I/911IMRHYeLL._AC_SY679_.jpg",
    },

    {
      id: Math.random(),
      title: "Whiplash",
      year: 2014,
      rate: 3,
      image:
        "https://www.movies.ch/db_data/movies/whiplash/artwrk/ki_l/510_01__700x1000_4f_DCH.jpg",
    },

    {
      id: Math.random(),
      title: "Avatar",
      year: 2009,
      rate: 4,
      image:
        "https://i.pinimg.com/originals/dd/a5/90/dda59083394ab3faa7985032815f26c7.jpg",
    },
  ];

  const [movies, setMovies] = useState(data);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  console.log(filterText);

  return (
    <div className="movieapp">
      <Header
        setFilterText={setFilterText}
        setFilterRate={setFilterRate}
        filterRate={filterRate}
      />

      <MovieForm isEdit={false} addMovie={addMovie} />
      <MoviesList
        movies={movies}
        filterText={filterText}
        filterRate={filterRate}
      />
    </div>
  );
}

export default App;
