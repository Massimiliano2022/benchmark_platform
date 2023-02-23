/*function changeStarColor() {
    const svgs = document.getElementsByClassName("svg-star");
    for (let i = 0; i < svgs.length; i++) {
      const star = svgs[i].querySelector("path");
      star.addEventListener("mouseenter", function() {
        star.style.fill = "#00FFFF";
      });
    }
  }
  
  changeStarColor();*/

  function changeStarColor() {
    const svgs = document.getElementsByClassName("svg-star");
    let lastColoredIndex = -1;

    for (let i = 0; i < svgs.length; i++) {
      const star = svgs[i].querySelector("path");

      star.addEventListener("mousemove", function(event) {
        // Obtem as coordenadas do retângulo que envolve o elemento SVG
        const rect = svgs[i].getBoundingClientRect();

        // Verifica se o movimento do mouse está indo da esquerda para a direita
        if (event.clientX > rect.left) {
          // Verifica se a estrela atual é a próxima da sequência para ser colorida
          if (i === lastColoredIndex + 1) {
            lastColoredIndex = i;
            star.style.fill = "#00FFFF";
          } else if (i < lastColoredIndex) {
            // Desfaz as cores das estrelas anteriores se o usuário está movendo o mouse na direção oposta
            for (let j = lastColoredIndex; j > i; j--) {
              svgs[j].querySelector("path").style.fill = "";
            }
            lastColoredIndex = i;
            star.style.fill = "#00FFFF";
          }
        } else if (i <= lastColoredIndex) {
          // Desfaz as cores das estrelas anteriores se o usuário está movendo o mouse na direção oposta
          for (let j = lastColoredIndex; j >= i; j--) {
            svgs[j].querySelector("path").style.fill = "";
          }
          lastColoredIndex = i - 1;
        }
      });
    }
  }

  changeStarColor();