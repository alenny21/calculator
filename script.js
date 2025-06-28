function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  try {
    let input = document.getElementById("display").value;
    let result = eval(input);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
function toggleMusic() {
  const bgMusic = document.getElementById("bg-music");
  bgMusic.muted = !bgMusic.muted;
}

const clickSound = new Audio("https://cdn.pixabay.com/audio/2022/03/23/audio_6b3a705e96.mp3");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

let musicPlaying = false;

function toggleMusic() {
  const bgMusic = document.getElementById("bg-music");
  if (!musicPlaying) {
    bgMusic.volume = 0.3;
    bgMusic.play();
    musicPlaying = true;
    document.querySelector(".music-toggle").textContent = "🔇 Mute Music";
  } else {
    bgMusic.pause();
    musicPlaying = false;
    document.querySelector(".music-toggle").textContent = "🎵 Play Music";
  }
}
