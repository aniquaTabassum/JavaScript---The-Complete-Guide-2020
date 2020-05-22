const addBtn = document.getElementById("add-movie-btn")
const searchBtn = document.getElementById("search-btn")
const addMovieUserInputs = document.querySelectorAll("#user-input input")
const allMovies = []


function addMovieHandler()
{
  const title = addMovieUserInputs[0].value
  const extraName = addMovieUserInputs[1].value
  const movieValue = addMovieUserInputs[2].value
  
  if(title.trim() === "")
  {
    alert("please enter a valid title")
    return
  }

  const movie = {
    info : {
      movieTitle : title,
      [extraName] : movieValue
    },

    movieId : Math.random()
  }
  allMovies.push(movie)
  clearInputs()
  console.log(movie.info.movieTitle+" "+movie.info[extraName]+" "+movie.movieId)
}


function clearInputs(){
  for(input of addMovieUserInputs)
  {
    input.value = ""
  }
}
addBtn.addEventListener("click", addMovieHandler)