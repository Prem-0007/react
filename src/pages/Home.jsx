import MovieCard from "../components/MovieCard";
import { useState ,useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

import "../css/Home.css";
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
const [error, setError]= useState(null);
const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true);
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError(error);
            }
            finally{
                setLoading(false);
                console.log("Finished loading popular movies.");
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
      if(!searchQuery.trim()) return;
      if(loading) return;
      try{
 const searchResults = await searchMovies(searchQuery);
 setMovies(searchResults);
 setError(null);
      }
      catch(error){
        console.error("Error searching movies:", error);
        setError(error);
      }
      finally{
        setLoading(false);
      }
    
     
    };

    /*    { id: 2, title: "Titanic", release_date: "1997" },
        { id: 3, title: "The Matrix", release_date: "1999" },
    ]; */

   

return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error-message">Error: {error.message}</div>}
        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        )}
    </div>
);
}

export default Home;