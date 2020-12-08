import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  Action: [
    {
      MovieName: "The Dark Knight",
      Rating: "9.0"
    },
    {
      MovieName: "Joker",
      Rating: "8.5"
    },
    {
      MovieName: "Avengers: Endgame",
      Rating: "8.4"
    }
  ],
  Comedy: [
    {
      MovieName: "3 Idiots",
      Rating: "8.4"
    },
    {
      MovieName: "Munna Bhai MBBS",
      Rating: "8.1"
    },
    {
      MovieName: "Hera Pheri",
      Rating: "8.1"
    }
  ],
  Drama: [
    {
      MovieName: "The Shawshank Redemption",
      Rating: "9.3"
    },
    {
      MovieName: "UP",
      Rating: "8.3"
    },
    {
      MovieName: "The Pursuit of Happyness",
      Rating: "8.0"
    }
  ],
  Sci_fi: [
    {
      MovieName: "The Matrix",
      Rating: "8.7"
    },
    {
      MovieName: "Interstellar",
      Rating: "8.6"
    },
    {
      MovieName: "Gravity",
      Rating: "7.7"
    }
  ],
  Biopic: [
    {
      MovieName: "Dangal",
      Rating: "8.4"
    },
    {
      MovieName: "MS Dhoni: The Untold Story ",
      Rating: "7.8"
    },
    {
      MovieName: "Tanhaji",
      Rating: "7.6"
    }
  ],
  Thriller: [
    {
      MovieName: "Parasite",
      Rating: "8.6"
    },
    {
      MovieName: "Andhadhun",
      Rating: "8.3"
    },
    {
      MovieName: "A Wednesday",
      Rating: "8.1"
    }
  ]
};

export default function App() {
  var [movie, setMovie] = useState("Action");

  function ClickInputHandler(seeMovie) {
    movie = seeMovie;
    setMovie(movie);
  }
  return (
    <div className="App">
      <h1>GoodMovies</h1>
      <h3>Checkout My favourite Movies. Select a Genre to get started</h3>

      {Object.keys(dataBase).map((seeMovie) => {
        return (
          <button onClick={() => ClickInputHandler(seeMovie)} key={seeMovie}>
            {seeMovie}
          </button>
        );
      })}
    </div>
  );
}
