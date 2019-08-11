
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//functions that change themebar colors
const Story = () => {
  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "orange";
  document.getElementById("error1").style.display = "none";
}

const Fiction = () => {
  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "yellow";
  document.getElementById("error1").style.display = "none";

}

const Lyrics = () => {
  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "green";
  document.getElementById("error1").style.display = "none";

}

const Comedy = () => {
  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "lightblue";
  document.getElementById("error1").style.display = "none";

}

const Drama = () => {
  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "magenta";
  document.getElementById("error1").style.display = "none";

}

const Poem = () => {
  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "red";
  document.getElementById("error1").style.display = "none";

}

//button for popup card
const addStory = () => {
  let x = document.getElementById('themeBar').style.backgroundColor;
  var limit = document.getElementById('textArea').maxlength;
  let textArea = document.getElementById("textArea").value;
  let letterLength = textArea.length;
  document.getElementById('letter-amount').innerHTML = letterLength;
  
  if (letterLength >= 80) {
        document.getElementById('error').style.display = "none";
  }
}

//checks to see if user does everything told, if not, error shows
const checkStory = () => {
  let x = document.getElementById('themeBar').style.backgroundColor;
  let textArea = document.getElementById("textArea").value;
  let letterLength = textArea.length;

  if (letterLength < 80) {
    document.getElementById('error').style.display = "inline-block";    
  if (x == "") {
    document.getElementById('error1').style.display = "inline-block";
  }
 } else {
   displayStory();
 }
}
  
const displayStory = () => {

  let textArea = document.getElementById("textArea").value;
   
  //For themebar on card
  let StoryThemeColor = document.getElementById('themeBar').style.backgroundColor;
  let storyTheme = document.createElement("div");
  storyTheme.style.background = StoryThemeColor;
  var themeBarText = document.createElement("p");
  let themeBarPeriod = document.createTextNode(".");
  themeBarText.appendChild(themeBarPeriod); 
  storyTheme.appendChild(themeBarText);
  storyTheme.classList.add('period');
 
  //For card dimensions and text
  //creates carad and applies text with dimensions
    let actualCard = document.createElement("div");
    actualCard.appendChild(storyTheme);
    var text = document.createElement("p");
    let cardText = document.createTextNode(textArea);
    text.appendChild(cardText);
    var element = document.getElementById("Stories");
    actualCard.classList.add('cards');
    actualCard.appendChild(text);
    element.appendChild(actualCard);

    deleteCurrentStory();

}

const deleteCurrentStory = () => {

  let modal = document.getElementById("myModal");
  modal.style.display = "none";

  let themeBar = document.getElementById('themeBar');
  themeBar.style.background = "black";

  let textArea = document.getElementById("textArea").value = "";

}
