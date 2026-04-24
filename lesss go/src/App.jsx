import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import {Routes, Route}
  from "react-router-dom";
  import { MovieProvider } from "./contexts/MovieContext";
function App() {
 // const movieNumber = 1;

  return (
  
   
     
    /*
    <>
     <Hello/>
     <Hello name="prem"/>
    </>
    */
<>
<MovieProvider>
     <NavBar /> 
<main className="main-content"
>
  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/favorites" element={<Favorites />}/>
  </Routes>
</main>
</MovieProvider>
{/*
// CONDITIONAL RENDERING

   /*
<>

{
movieNumber ===1 ? (
<MovieCard movie={{title: "The Chosen", release_date:"2024"}}/>):
(<MovieCard movie={{title: "Titanic", release_date:"1997"}}/> )
}
</>
  )



/*
  <>
  <Home/>
  {
  /*
 {movieNumber ===1 && <MovieCard movie={{title: "The Chosen", release_date:"2024"}} />}

  } 
</>
)
};
 */

/*
function Hello({name}){
  return (
    <div>
      <p> Hello {name}</p>
    </div>
  )
}
*/

}
</>
  )
};

export default App;