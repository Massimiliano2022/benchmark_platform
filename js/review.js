function changeStarColor() {
  const svgs = document.getElementsByClassName("svg-star");
  let lastColoredIndex = -1;

  for (let i = 0; i < svgs.length; i++) {
    const star = svgs[i].querySelector("path");

    star.addEventListener("mousemove", function (event) {

      const rect = svgs[i].getBoundingClientRect();

      if (event.clientX > rect.left) {

        if (i === lastColoredIndex + 1) {
          lastColoredIndex = i;
          star.style.fill = "#00FFFF";
        } else if (i < lastColoredIndex) {

          for (let j = lastColoredIndex; j > i; j--) {
            svgs[j].querySelector("path").style.fill = "";
          }
          lastColoredIndex = i;
          star.style.fill = "#00FFFF";
        }
      } else if (i <= lastColoredIndex) {

        for (let j = lastColoredIndex; j >= i; j--) {
          svgs[j].querySelector("path").style.fill = "";
        }
        lastColoredIndex = i - 1;
      }
    });
  }
}
changeStarColor();

const starsSelected = document.querySelectorAll(".svg-star path[style='fill: #00FFFF;']");
let infoBtn = document.getElementById('infoButton');

if (starsSelected.length > 0) {
  infoBtn.disabled = false;
} else {
  infoBtn.disabled = true;
}

function bottoneAbilitato() {
  console.log('Sei arrivato alla fine');
}