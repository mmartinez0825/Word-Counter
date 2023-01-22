// grabbing first element with specified class name
const wordsTextArea = document.querySelector(
  ".word-counter-container .words-box"
);
const countBtn = document.querySelector(".word-counter-container .counter-btn");
const wordCount = document.querySelector(".number-of-words-display span");
const playBtn = document.querySelector("#playBtn");

playBtn.addEventListener("click", playAudio);

function playAudio() {
  const audioFile = document.getElementById("audio");
  //sets the volume to 30%
  audioFile.volume = 0.3;
  audioFile.play();
}

// function to count words typed. using arrow method instead of typing function name()
const countWords = () => {
  // grabbing what user types in the text box
  let words = wordsTextArea.value;
  // stops word counter from counting spaces as words
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  // every time theres a space between words it will be added as a new item here
  let splitWords = wordsTrimmed.split(" ");
  // grabs number of items stored in the splitWords variable
  let numberOfWords = splitWords.length;
  // if first item inside split words is "" which it is. then numberOfWords=0
  // stops word counter from displaying 1 when no text is in the text box
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }
  // displays number of words in span element
  wordCount.innerHTML = numberOfWords;
};
// btn event listener
countBtn.addEventListener("click", countWords);
