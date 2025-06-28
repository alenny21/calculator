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
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

const clickSound = new Audio("https://cdn.pixabay.com/audio/2022/03/23/audio_6b3a705e96.mp3");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0; // rewind to start
    clickSound.play();
  });
});

