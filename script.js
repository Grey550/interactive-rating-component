let ratings = null;

function selectedRating(rating){
  let selectedRating = rating;
}
function submit(){
  if (selectedRating !== null) {
    document.querySelector(".ratings-container").style.display = "none";
    document.querySelector(".feedback-container").style.display = "block";
    document.getElementById("ratings").textContent = `You selected ${selectedRating} out of 5`;
  }
 
}