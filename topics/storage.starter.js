/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \//_____/      \/ 
*/

// 1 - click on the button, then add your name to localstorage in the key "myName"

// 2 - click on the button to read the value of "myName" from localstorage and display it span#myName

// 3 - click on remove button to remove "myName" from localstorage

// 4 - click on the button to add a movie to the localstorage in the key "movies", show movies in the ul#movieList
// hint: the value of movies should be an array of strings
// hint: you can use JSON.stringify to convert an array to string
// hint: you can use JSON.parse to convert a string to array
// hint: you can use appendChild to add a new li to the ul#movieList

document.getElementById("saveName").addEventListener("click", function () {
  let name = prompt("Enter your name:");
  if (name) {
    localStorage.setItem("myName", name);
    document.getElementById("myName").textContent = name;
  }
});

document.getElementById("showName").addEventListener("click", function () {
  let storedName = localStorage.getItem("myName");
  document.getElementById("myName").textContent = storedName
    ? storedName
    : "No name stored";
});

document.getElementById("removeName").addEventListener("click", function () {
  localStorage.removeItem("myName");
  document.getElementById("myName").textContent = "";
});

document.getElementById("addMovie").addEventListener("click", function () {
  let movie = prompt("Enter a movie name:");
  if (movie) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    updateMovieList();
  }
});

function updateMovieList() {
  let movieList = document.getElementById("movieList");
  movieList.innerHTML = "";
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.forEach((movie) => {
    let li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("myName")) {
    document.getElementById("myName").textContent =
      localStorage.getItem("myName");
  }
  updateMovieList();
});
