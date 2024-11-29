// Initialize Fancybox on elements with data-fancybox="gallery"
Fancybox.bind('[data-fancybox="gallery"]', {
  // Options can be specified here
  loop: true, // Allows infinite navigation between images
  animation: "fade", // Sets zoom animation
  Toolbar: { display: ["close"] } // Adds a close button
});
