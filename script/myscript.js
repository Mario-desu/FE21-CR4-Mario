let movieData = JSON.parse(movies);

console.table(movieData);


for (i in movieData) {
    
    

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
                            <button class="btn btn-success" id="like-btn" type="button"}>Like &#128077</button>
                            <span id="dotResult">0</span>
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



    var button = document.getElementById("like-btn"),
        count = 0;
        button.onclick = function() {
        count += 1;
    document.getElementById("dotResult").innerHTML = "Likes: " + count;
  };
  
}
//     const clickBtn = document.querySelectorAll("button");
    // console.log(btn);
//     for (let j in clickBtn){        
//         function clickLike () {
//             let inputNumber = document.getElementById("dotResult" + [i]);
//             let dataCounter = movieData[i].likes += 1;
//             // console.log(dataCounter)
//             inputNumber.innerHTML = dataCounter;
//         };
//     }
//     clickBtn[i].addEventListener("click", clickLike);

// console.log(clickBtn);

// }







 





 












