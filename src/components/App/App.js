import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import AddMovie from '../AddMovie/AddMovie'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route> */}

        {/* Details page */}

        {/* Add Movie page */}
        <Router>
          <Routes>
            <Route path="/" element={<MovieList />}/>
            <Route path="/details/:id" element={<MovieDetail />}/>
            <Route path="/add" element={<AddMovie />}/>
          </Routes>
      </Router>
    </div>
  );
}


export default App;
