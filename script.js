// Select all drum buttons
const buttons = document.querySelectorAll(".drum-container button");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundName = button.dataset.sound;
    playSound(soundName);
    animateButton(button);
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const keyMap = {
  q: "crash",
  w: "tom-1",
  e: "tom-2",
  r: "tom-3",
  a: "snare",
  s: "kick-bass",
  d: "crash-2"   
};


  const soundName = keyMap[e.key.toLowerCase()];
  if (soundName) {
    playSound(soundName);


    const button = [...buttons].find(b => b.dataset.sound === soundName);
    if (button) animateButton(button);
  }
});

// Function to play sound
function playSound(soundName) {
  const audio = new Audio(`./sounds/${soundName}.mp3`);
  audio.currentTime = 0;
  audio.play();
}

// Button animation effect
function animateButton(button) {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 150);
}
