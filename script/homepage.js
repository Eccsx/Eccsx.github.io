// Typing animations

const title = new TypeIt("#home-title", {
  speed: 1,
  cursorChar: "",
  lifeLike: false,
  // Removing cursor after finishing writing
  afterComplete: function (step, instance) {
    instance.destroy();
    subtitle.pause(750).go();
  }
});

const subtitle = new TypeIt("#home-subtitle", {
  speed: 100,
  cursorChar: "_"
});

title.go();

// Key listener
document.addEventListener('keyup', (e) => {
  if (e.code == "Enter") location.replace('./menu.html');
});