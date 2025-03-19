document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".imgTile"); // Henter alle thumbnails
  const bigImage = document.getElementById("big"); // Henter det store billede

  thumbnails.forEach((thumb) => { 
      thumb.addEventListener("click", (event) => { 
          const clickedImage = event.target; // Finder det specifikke billede, der blev klikket på

          // Gemmer URL'erne som variabler
          const tempSrc = bigImage.getAttribute("src");
          const clickedSrc = clickedImage.getAttribute("src");

          // Bytter billederne
          bigImage.setAttribute("src", clickedSrc);
          clickedImage.setAttribute("src", tempSrc);
      });
  });
});
