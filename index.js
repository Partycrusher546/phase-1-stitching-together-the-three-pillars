/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}

let articleHearts = document.querySelectorAll(".like-glyph");

function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", function () {
    console.log("You clicked the heart!");
  });
}
