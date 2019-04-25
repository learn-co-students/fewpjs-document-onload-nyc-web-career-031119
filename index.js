// Your code goes here

// document.addEventListener(DOMContentLoaded, function() {
//   console.log("The DOM has loaded");
// })
//
//
//
// //because it is outside of the event listener.
// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );

document.addEventListener('DOMContentLoaded', (event) => {
  let textArea = document.querySelector('#text')
  textArea.innerHTML = "This is really cool!";
});
