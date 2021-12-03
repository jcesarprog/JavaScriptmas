const greeting = document.getElementById("greeting");
const btnFix = document.getElementById("btn-fix");
const btnTheme = document.getElementById("btn-theme");
const container = document.querySelector(".container");

btnFix.addEventListener("click", fix);
btnTheme.addEventListener("click", changeTheme);
let light = true;

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.style.fontFamily = "Mountains of Christmas";
}
//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 --wine-red: #C7375F;
  --bright-red: #D42D2F;
  --dark-green: #344D2F;
  --light-green: #77A047;
  --gold: #FAC57D;
  --snow: #F0F4F7;
*/
const colors = [
  "#C7375F",
  "#D42D2F",
  "#344D2F",
  "#77A047",
  "#FAC57D",
  "#F0F4F7",
];

function changeTheme() {
  const newTheme = colors[getRandom(0, colors.length - 1)];
  let newFontTheme = colors[getRandom(0, colors.length - 1)];
  newFontTheme =
    newFontTheme === newTheme
      ? colors[getRandom(0, colors.length - 1)]
      : newFontTheme;

  container.style.backgroundColor = newTheme;
  greeting.style.color = newFontTheme;
}

function changeMessage(message) {
  const today = new Date();
  today.getMonth() === 11 &&
    today.getDate() === 31 &&
    (greeting.textContent = `🎉 ${message} 🎉`);
}
changeMessage("Happy New Year!");
