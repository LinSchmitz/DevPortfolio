// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>Cino</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="search"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length} </strong> reasults
    </p>
  );
}

function Main({ movies }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}

function ListBox({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <Movie movie={movie} key={movies.Title} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return <li>{movie.Title} </li>;
}

function WatchedBox() {
  const [isOpen, setIsOpen] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && (
        <>
          <WatchedSummary />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}

function WatchedSummary() {
  return <div>WatchedSummary</div>;
}

function WatchedMovieList({ watched }) {
  return <div>WatchedMovieList</div>;
}
