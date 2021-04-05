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
                            <button class="btn btn-success" id="click-button">Like &#128077</button>
                            <span id="dotResult">${movieData[i].likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
} 
// end for-in loop





/* I had two approaches, unfortuntely the second one (commented out) didn't work eventhough the index was added to the id (see consolelike 
Line 22: id="like-btn${[i]}", same for Line23 id="dotResult${[i]}".
The other approach just works for the first card.
*/








// const clickBtn = document.querySelectorAll("#clickbutton");
    
// for (let i=0; i < clickBtn.length; i++){        
//     function clickLike () {
//         let inputNumber = document.getElementsByClassName("dotResult")[i];
//         let dataCounter = (number(movieData[i].likes) += 1);
//         console.log(dataCounter)
//         inputNumber.innerHTML = dataCounter;
//     };
// }
// clickBtn.addEventListener("click", clickLike);

// console.log(clickBtn);

// let likeBtn = document.querySelectorAll("#click-button");
// ​
// likeBtn.forEach(function(currentBtn){
// ​
//     currentBtn.addEventListener("click", function(){
// ​
//         let like = this.parentNode.querySelector("#dotResult").innerHTML;
// ​
//         like = parseInt(like);
// ​
//         this.parentNode.querySelector("#dotResult").innerHTML = like + 1;
// ​
//     })
// ​
// })





 





 












