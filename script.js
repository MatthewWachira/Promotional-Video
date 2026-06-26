const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("videoButton");

button.addEventListener("click", function () {
  if (video.paused) {
    video.style.display = "block";
    video.play();
  } else {
    video.pause();
    video.style.display = "none";
  }
});