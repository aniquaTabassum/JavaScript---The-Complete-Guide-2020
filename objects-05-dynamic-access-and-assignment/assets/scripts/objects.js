const addBtn = document.getElementById("add-movie-btn")
const searchBtn = document.getElementById("search-btn")
const addMovieUserInputs = document.querySelectorAll("#user-input input")
const searchInput = document.querySelector("#filter input")
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
  renderMovie()
  console.log(movie.info.movieTitle+" "+movie.info[extraName]+" "+movie.movieId)
}


function clearInputs(){
  for(input of addMovieUserInputs)
  {
    input.value = ""
  }
}

function renderMovie(filter = "")
{
  const movieList = document.getElementById("movie-list")
  if(allMovies.length != 0)
  {
    movieList.classList.add("visible")

  }
  else{
    movieList.classList.remove("visible")
    return
  }

  movieList.innerHTML = ""
  movieDB = !filter ? allMovies : allMovies.filter(m => m.info.movieTitle.includes(filter))
  movieDB.forEach((movie) =>{
    newMovie = document.createElement("li")
    
    for(key in movie.info)
    {
      if(key != 'movieTitle')
      {
        newMovie.textContent = movie.info.movieTitle + ` ${key} : ${movie.info[key]}`
      }
    }
    movieList.append(newMovie)
  })
}

function searchBtnHandler()
{
    const movieToSearch = searchInput.value
    renderMovie(movieToSearch)
}
addBtn.addEventListener("click", addMovieHandler)
searchBtn.addEventListener("click", searchBtnHandler)