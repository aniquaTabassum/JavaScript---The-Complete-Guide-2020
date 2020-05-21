const starAddBtn = document.getElementById("add-button")
const backDrop = document.getElementById("backdrop")
modalCancelBtn = document.getElementById("modal-cancel-btn")
const confirmMovieBtn = document.getElementById("modal-add-btn")
const userInputs = document.querySelectorAll(".modal__content input")
let noDelete = document.getElementById("no-delete")
let deleteModal = document.getElementById("delete-modal")

const movies = []
let movieId = 0;
const addNewMovie = (movieTitle, imageUrl, rating, movieId) =>{
    newMovie = {
        id : movieId,
        title : movieTitle,
        imageUrl : imageUrl,
        rating : rating
    }
    movies.push(newMovie)
    
}

const changeListVisibility = () =>{
    if(movies.length!=0){
        main = document.querySelector("main #entry-text")
        main.style.display = "none"
    
    }
    else{///
        main.style.display = "block"
    }
}
const confirmDelete = () =>{
    
    deleteModal.classList.toggle("visible")

}
const startDeletingMovieHandler = (movieId) =>{
    let yesDelete = deleteModal.querySelector(".btn--danger")
    yesDelete.replaceWith(yesDelete.cloneNode(true))
    yesDelete = deleteModal.querySelector(".btn--danger")
    yesDelete.addEventListener("click", yesDeleteHandler.bind(null,movieId))
    confirmDelete()
    
}

const yesDeleteHandler = (movieId) =>{
    let movieIndex = 0
    for(const movie of movies)
    {
        if(movie.id === movieId)
        {
            break;
        }
        else{
            movieIndex++
        }
    }

    movies.splice(movieIndex,1)
    ul = document.getElementById("movie-list")
    ul.children[movieIndex].remove()
    deleteModal.classList.toggle("visible")
    changeListVisibility()
}
const renderMovie = (title, url, rating, movieId) =>{
    ul = document.querySelector("main #movie-list")
    newMovie = document.createElement("li")
    newMovie.className = "movie-element"
    newMovie.innerHTML = `
    <div class = "movie_element__image">
        <img src = "${url}" alt = "${title}">
    </div>
    <div class = "movie_element__info">
        <h2> ${title}</h2>
        <p>${rating}/5 Stars</p>
    </div>
    `;
    newMovie.addEventListener("click", startDeletingMovieHandler.bind(null, movieId) )
    ul.append(newMovie)
}
const startMovieHandler = () =>{
    const modal = document.querySelector("#add-modal")
    modal.classList.toggle("visible")
    toggleBackDrop()
}

const clearUserInput = () =>{
    for(const input of userInputs){
        input.value = ""
    }
}
const toggleBackDrop = ()=>{
    backDrop.classList.toggle("visible")
    clearUserInput()
}

const confirmMovieBtnHandler = () =>{
    movieTitle = userInputs[0].value
    imageUrl = userInputs[1].value
    rating = userInputs[2].value
    movieTitle.trim() === ""? alert("please input a valid name") : 
    imageUrl.trim() === ""? alert("please enter a valid image URL") :
    +rating <1 || +rating>5 ? alert("please enter a rating between 1-5") : 
    startMovieHandler(), addNewMovie(movieTitle, imageUrl, rating, movieId), clearUserInput(),
    changeListVisibility(), renderMovie(movieTitle, imageUrl, rating, movieId), movieId++
   
  }
starAddBtn.addEventListener("click", startMovieHandler)
backDrop.addEventListener("click", startMovieHandler)
modalCancelBtn.addEventListener("click", startMovieHandler)
confirmMovieBtn.addEventListener("click", confirmMovieBtnHandler)
noDelete.addEventListener("click", confirmDelete)
