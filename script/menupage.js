// Typing animations
const menu = new TypeIt("#menu", {
  speed: 30,
  cursorChar: "",
  lifeLike: false,
  // Removing cursor after finishing writing
  afterComplete: function (step, instance) {
    instance.destroy();
    subtitle.pause(750).go();
  }
});

const subtitle = new TypeIt("#menu-subtitle", {
  speed: 100,
  cursorChar: "_"
});

menu.go();