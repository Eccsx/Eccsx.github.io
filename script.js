new TypeIt("#home-title", {
  speed: 10,
  cursorChar: "_",
  // Removing cursor after finishing writing
  afterComplete: function (step, instance) {
    instance.destroy();
  }
}).go();