// Collect the html classes i need
const heading = document.querySelectorAll(".heading");
const reply = document.querySelectorAll(".reply");
const question = document.querySelectorAll(".question");
const arrowDown = document.querySelectorAll(".arrow-down");

// iterator to select each question
for (let i = 0; i < heading.length; i++) {
    const headings = heading[i];
    
// Add click funtion to each question
headings.addEventListener("click", getInput);
    
// Define what the click funtion does (open, then close when clicked)
function getInput() {
    headings.classList.toggle("active")
    arrowDown[i].classList.toggle("active");
    if(headings.classList.contains("active")){
        reply[i].style.display = "block";   
        question[i].style.fontWeight = "bold";   
    } 
    else {
        reply[i].style.display = "none"; 
        question[i].style.fontWeight = "100";   
    }
 }
}