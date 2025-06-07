var swiper2 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  freeMode: false,
  slidesPerView: 1.1,
  speed: 800,

  autoplay: {
    delay: 5000, // tempo em milissegundos entre os slides
  },
  loop: true,
  navigation: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

//cometarios planilha
const csvUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmrZxXBHH3ssDwcG4KxBPd_HI1cEC1sErlA-SkdqGltKgUiY95-HiIUfAyc_Zk3cKMXGVJgGT3ACGb/pub?output=csv";

fetch(csvUrl)
  .then((response) => response.text())
  .then((csv) => {
    const dados = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
    }).data;

    console.log("Dados processados:", dados);

    const container = document.getElementById("comentarios");
    container.innerHTML = `
      <div class="swiper mySwiper2">
        <div class="swiper-wrapper">
          <!-- Slides vão aqui -->
        </div>
        <!-- Paginação -->
        <div class="swiper-pagination"></div>
        <!-- Navegação -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <!-- Scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    `;

    const wrapper = container.querySelector(".swiper-wrapper");

    dados.forEach((item) => {
      const nome = item.Nome || "Anônimo";
      const comentario = item["Comentário"] || "";
      const nota = parseInt(item.Nota) || 0;
      const estrelas = "⭐".repeat(nota);

      const slide = document.createElement("div");
      slide.classList.add("swiper-slide", "card");
      slide.innerHTML = `
        <div class="nota"> ${estrelas}</div>
        <h4 class="nome">${nome}</h4>
        <p class="comments">${comentario}</p>
      `;

      wrapper.appendChild(slide);
    });

    // Inicializar o Swiper depois que os slides forem criados
    var swiper = new Swiper(".mySwiper2", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-pagination",
      },

      breakpoints: {
        600: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  })
  .catch((error) => {
    document.getElementById("comentarios").innerText =
      "Erro ao carregar comentários.";
    console.error("Erro ao buscar CSV:", error);
  });
