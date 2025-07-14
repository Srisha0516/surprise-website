// 💖 Typewriter text
const message = "You're my favorite person. Thank you for being you.";
let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// 💌 Reveal secret message + play music
const revealBtn = document.getElementById("revealBtn");
const secret = document.getElementById("secret-message");
const music = document.getElementById("bg-music");

revealBtn.addEventListener("click", () => {
  secret.classList.remove("hidden");
  music.play();
  music.muted = false;
});

// 🎀 Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);
// Rotating Messages
const rotatingMessages = [
  "This moment is just for you... 💫",
  "You deserve the world and more 🌍",
  "Listening to this... thinking of you 💖",
  "I hope you're smiling right now 😊",
  "You're my favorite kind of magic ✨"
];

let msgIndex = 0;
const rotatingMsgBox = document.getElementById("rotating-message");

function showRotatingMessage() {
  rotatingMsgBox.textContent = rotatingMessages[msgIndex];
  rotatingMsgBox.style.opacity = 0;
  setTimeout(() => {
    rotatingMsgBox.style.opacity = 1;
  }, 200);
  msgIndex = (msgIndex + 1) % rotatingMessages.length;
  setTimeout(showRotatingMessage, 4000);
}
showRotatingMessage();

// Fade Images
const images = document.querySelectorAll('.fade-image');
let index = 0;
function fadeInNextImage() {
  if (index < images.length) {
    images[index].style.display = 'block';
    setTimeout(() => {
      images[index].style.opacity = 1;
      index++;
      setTimeout(fadeInNextImage, 2500);
    }, 100);
  }
}
fadeInNextImage();

// Fun Facts
const facts = document.querySelectorAll(".fact-card");
let current = 0;
function revealNextFact() {
  if (current < facts.length) {
    facts[current].style.opacity = 1;
    facts[current].style.animation = "bounceIn 0.8s ease";
    current++;
    setTimeout(revealNextFact, 2000);
  }
}
setTimeout(revealNextFact, 1500);

