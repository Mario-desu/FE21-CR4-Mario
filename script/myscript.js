let movieData = JSON.parse(movies);

console.table(movieData);

// const sortLikes = document.getElementById("moviesSort");
// sortLikes.addEventListener("click", sortMovies);

// function sortMovies() {
//   movieData.sort((a, b) => b.likes - a.likes);}



function displayCards(){

for (i = 0; i < movieData.length; i++) {
    
    

    document.getElementById("card-wrapper").innerHTML += `
    <div class="col">
        <div class="card h-100 shadow rounded">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${movieData[i].image}" class="img-fluid rounded" alt="Movie poster">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${movieData[i].movieName}</h5>
                        <p class="card-text">${movieData[i].description}</p>
                    </div>
                    <div class="card-footer likeBtn" id="randCard${[i]}">
                    
                    <btn class="likeCount btn btn-primary rounded-circle disabled">${movieData[i].likes}*</btn><br><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
} 
// end for-loop

}//end function displayCards()

displayCards();


//Click-Counter

function btnLikes() {
    for (let i in movieData) {
      let buttonCount = document.getElementsByClassName("likeBtn");
      let countTarget = document.getElementsByClassName("likeCount");
      buttonCount[i].innerHTML +=
        "<button class='btn btn-success blike'>Like &#128077</button>";
      let bcount = document.getElementsByClassName("blike");
      bcount[i].addEventListener("click", addLike);
      function addLike() {
        let up = parseInt(movieData[i].likes) + 1;
        countTarget[i].innerHTML = up + "*";
        console.log(up);
        movieData[i].likes = up;

      }
    }
    
  }
  
  btnLikes();


//Sort-Button



document.getElementById("movieSort").addEventListener("click", sortBtn);

// Clear card-wrapper from old cards
function sortBtn() {
    movieData.sort((a, b) => b.likes - a.likes);
    const newCards = document.getElementById("card-wrapper");
    newCards.textContent = "";
    displayCards();
    btnLikes();
  }
  



















