let movieData = JSON.parse(movies);

console.table(movieData);

// const sortLikes = document.getElementById("moviesSort");
// sortLikes.addEventListener("click", sortMovies);

// function sortMovies() {
//   movieData.sort((a, b) => b.likes - a.likes);}

for (let i in movieData) {
    
    

    document.getElementById("card-wrapper").innerHTML += `
    <div class="col">
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${movieData[i].image}" class="img-fluid" alt="Movie poster">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${movieData[i].movieName}</h5>
                        <p class="card-text">${movieData[i].description}</p>
                        <div class="card-footer">
                            <button${i} class="btn btn-success click-button">Like &#128077</button>
                            <span${i} class="dotResult">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

/* I had two approaches, unfortuntely the second one (commented out) didn't work eventhough the index was added to the id (see consolelike 
Line 22: id="like-btn${[i]}", same for Line23 id="dotResult${[i]}".
The other approach just works for the first card.
*/



//     var button = document.getElementById("like-btn"),
//         count = 0;
//         button.onclick = function() {
//         count += 1;
//     document.getElementById("dotResult").innerHTML = "Likes: " + count;
//   };
  
// }
    const clickBtn = document.querySelectorAll("button");
    
    for (let j=0; j < clickBtn.length; j++){        
        function clickLike () {
            let inputNumber = document.getElementsByClassName("dotResult")[j];
            let dataCounter = (number(movieData[j].likes) += 1);
            console.log(dataCounter)
            inputNumber.innerHTML = dataCounter;
        };
    }
    clickBtn.addEventListener("click", clickLike);

console.log(clickBtn);

}







 





 












